from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404

from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CommunitySerializer, UserSerializer, UserSerializerWithToken, CommunityUserRoleSerializer, ActivitySerializer, RideActivitySerializer, MealActivitySerializer, EventActivitySerializer 
from .models import Community, User, CommunityUserRole, Activity, EventActivity, MealActivity, RideActivity 

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