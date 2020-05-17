from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail, EmailMultiAlternatives, BadHeaderError
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.template import loader
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.utils.decorators import method_decorator
from django.views.decorators.debug import sensitive_post_parameters

from rest_framework import viewsets, permissions, status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import (
    CommunitySerializer, UserSerializer, CommunityUserRoleSerializer, UserSerializerWithToken, 
    PasswordResetConfirmSerializer, ActivitySerializer, RideActivitySerializer, MealActivitySerializer, 
    EventActivitySerializer 
)
from .models import (
    Community, User, CommunityUserRole, Activity, EventActivity, MealActivity, RideActivity 
)
from django.conf import settings 


sensitive_post_parameters_m = method_decorator(sensitive_post_parameters())

class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all().order_by('name')
    serializer_class = CommunitySerializer

    def get_queryset(self):
        comms = CommunityUserRole.objects.filter(user=self.request.user).values_list('community', flat=True)
        return Community.objects.filter(id__in=comms)

class OneCommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all().order_by('name')
    serializer_class = CommunitySerializer

    def get_queryset(self):
        name = self.request.query_params.get('name')
        zipcode = self.request.query_params.get('zipcode')
        is_closed = self.request.query_params.get('is_closed')
        return Community.objects.filter(name=name, zipcode=zipcode, is_closed=is_closed)


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('last_name')
    serializer_class = UserSerializer


class CommunityUserRoleViewSet(viewsets.ModelViewSet):
    queryset = CommunityUserRole.objects.all()
    serializer_class = CommunityUserRoleSerializer


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommunityList(APIView):
    """
    Get names of communities without requiring a token.
    """
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        communities = [community.name for community in Community.objects.all()]
        return Response(communities)


class CommunityUserRoleRegister(APIView):
    """
    When a user registers, they can select an existing community to join. This adds the relationship to the database. 
    """
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        community_name = request.POST['community']
        user_email = request.POST['user']
        community = Community.objects.get(name=community_name).id
        user = User.objects.get(email=user_email).id
        request.POST._mutable = True
        request.POST['community'] = community
        request.POST['user'] = user
        serializer = CommunityUserRoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResetPassword(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = request.data
        email = data["email"]
        url = ''
        if len(list(self.get_users(email))) == 0: 
            return Response(status=status.HTTP_404_NOT_FOUND)
            
        for user in self.get_users(email):
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            url = "http://localhost:3000/reset-password?uid=" + uid + "&token=" + token

        msg_plain = 'We received a request to reset your password for your Here to Serve account. ' \
                    'Here is your password reset link: ' + url + '. If you did not send ' \
                    'this request, you can safely ignore this email.'
        msg_html = 'We received a request to reset your password for your Here to Serve account. ' \
                   'Here is your password reset <a href=' + url + '>link</a>. If you did not send ' \
                   'this request, you can safely ignore this email.'
        try:
            send_mail(
                'Reset Password for Here to Serve',  
                msg_plain,
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
                html_message=msg_html,
            )
        except BadHeaderError:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)
        

    def get_users(self, email):
        active_users = get_user_model()._default_manager.filter(
            email__iexact=email)
        return (u for u in active_users if u.has_usable_password())


class PasswordResetConfirmView(generics.GenericAPIView):
    serializer_class = PasswordResetConfirmSerializer
    permission_classes = (permissions.AllowAny,)

    @sensitive_post_parameters_m
    def dispatch(self, *args, **kwargs):
        return super(PasswordResetConfirmView, self).dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"detail": ("Password has been reset with the new password.")}
       )


class ActivityViewSet(viewsets.ViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        user_comms = request.user.communityuserrole_set.values_list("community", flat=True)
        queryset = Activity.objects.filter(community__in=user_comms)
        serializer = ActivitySerializer(queryset, many=True)

        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Activity.objects.all()
        activity = get_object_or_404(queryset, pk=pk)
        if(activity.activity_type == 'Giving Rides'):
            activity = get_object_or_404(RideActivity.objects.all(), pk=pk)
            serializer = RideActivitySerializer(activity)
        elif(activity.activity_type == 'Preparing Meals'):
            activity = get_object_or_404(MealActivity.objects.all(), pk=pk)
            serializer = MealActivitySerializer(activity)
        else:
            activity = get_object_or_404(EventActivity.objects.all(), pk=pk)
            serializer = EventActivitySerializer(activity)

        return Response(serializer.data)

    def create(self, request):
        community_id = request.POST['community']
        user_email = request.POST['user']
        user = User.objects.get(email=user_email).id

    def post(self, request, format=None):
        if(request.POST['activity_type'] == 'Getting Rides'):
            serializer = RideActivitySerializer(data=request.data)
        elif(request.POST['activity_type'] == 'Preparing Meals'):
            serializer = MealActivitySerializer(data=request.data)
        else:
            serializer = EventSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
