from django.shortcuts import render

from rest_framework import viewsets

from .serializers import CommunitySerializer
from .models import Community, CustomSection

class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all().order_by('name')
    serializer_class = CommunitySerializer



