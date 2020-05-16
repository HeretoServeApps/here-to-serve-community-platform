from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail, EmailMultiAlternatives, BadHeaderError
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.template import loader
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes

from rest_framework import viewsets, permissions, status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CommunitySerializer, UserSerializer, CommunityUserRoleSerializer, UserSerializerWithToken
from .models import Community, User, CommunityUserRole
from django.conf import settings 

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
    permission_classes = (permissions.AllowAny,)

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
