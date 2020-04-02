from rest_framework import serializers

from .models import Community, CustomSection


class CommunitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Community
        fields = ('name', 'is_closed')





