from rest_framework import serializers

from rest_framework_jwt.settings import api_settings
from .models import Community, User, CommunityUserRole, Activity, EventActivity, MealActivity, RideActivity, CustomSection


class CommunitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'name', 'is_closed', 'description', 'zipcode', 'country')

class CustomSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomSection
        fields = ('name', 'type', 'link', 'title', 'description', 'community')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'phone_number_1', 'phone_number_1_type',
                  'phone_number_2', 'phone_number_2_type', 'address_line_1', 'address_line_2', 
                  'city', 'zipcode', 'state', 'country')


class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'email', 'password', 'first_name', 'last_name', 'address_line_1', 'address_line_2',
                  'city', 'state', 'zipcode', 'country', 'phone_number_1', 'phone_number_1_type', 'phone_number_2',
                  'phone_number_2_type', 'who_help', 'how_learn', 'how_help', 'how_know', 'skills_to_offer')


class CommunityUserRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityUserRole
        fields = ('community', 'user', 'role')


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class RideActivitySerializer(serializers.ModelSerializer):
    activity_ptr = ActivitySerializer(required=True)
    class Meta:
        model = RideActivity
        fields = ('activity_ptr', 'pickup_time', 'pickup_time_buffer', 'arrive_time', 'pickup_location', 'destination_location')

class MealActivitySerializer(serializers.ModelSerializer):
    activity_ptr = ActivitySerializer(required=True)
    class Meta:
        model = MealActivity
        fields = ('activity_ptr', 'delivery_time', 'delivery_location', 'dietary_restrictions')

class EventActivitySerializer(serializers.ModelSerializer):
    activity_ptr = ActivitySerializer(required=True)
    class Meta:
        model = EventActivity
        fields = ('activity_ptr', 'start_time', 'end_time', 'location')

