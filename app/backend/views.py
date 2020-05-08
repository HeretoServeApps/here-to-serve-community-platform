from django.shortcuts import render
from django.http import HttpResponseRedirect

from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CommunitySerializer, UserSerializer, UserSerializerWithToken
from .models import Community, User, CommunityUserRole

class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all().order_by('name')
    serializer_class = CommunitySerializer

    def get_queryset(self):
        comms = CommunityUserRole.objects.filter(user=self.request.user).values_list('community', flat=True)
        return Community.objects.filter(id__in=comms)


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('last_name')
    serializer_class = UserSerializer


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
