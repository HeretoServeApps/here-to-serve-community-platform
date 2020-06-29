from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import (
    Community, User, CommunityUserRole, Activity, EventActivity, MealActivity, RideActivity, Announcement, CustomSection, WellWish, Resource, DiscussionPost
) 

from django.contrib.auth.forms import SetPasswordForm
from django.core.exceptions import ValidationError
from django.utils.http import urlsafe_base64_decode

class CommunitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'name', 'is_closed', 'description', 'zipcode', 'country', 'ways_to_help')

class CustomSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomSection
        fields = ('id', 'name', 'type', 'link', 'title', 'description', 'community', 'general_content')

class UserSerializerWithID(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'phone_number_1')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'phone_number_1', 'phone_number_1_type',
                  'phone_number_2', 'phone_number_2_type', 'address_line_1', 'address_line_2', 
                  'city', 'zipcode', 'state', 'country')

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.phone_number_1 = validated_data.get('phone_number_1', instance.phone_number_1)    
        instance.phone_number_1_type = validated_data.get('phone_number_1_type', instance.phone_number_1_type)
        instance.phone_number_2 = validated_data.get('phone_number_2', instance.phone_number_2)    
        instance.phone_number_2_type = validated_data.get('phone_number_2_type', instance.phone_number_2_type)
        instance.address_line_1 = validated_data.get('address_line_1', instance.address_line_1)
        instance.address_line_2 = validated_data.get('address_line_2', instance.address_line_2)
        instance.city = validated_data.get('city', instance.city)
        instance.zipcode = validated_data.get('zipcode', instance.zipcode)
        instance.state = validated_data.get('state', instance.state)
        instance.country = validated_data.get('country', instance.country)

        instance.save()
        return instance


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


class PasswordResetConfirmSerializer(serializers.Serializer):
    new_password1 = serializers.CharField(max_length=128) # password
    new_password2 = serializers.CharField(max_length=128) # confirm password

    uid = serializers.CharField()
    token = serializers.CharField()

    set_password_form_class = SetPasswordForm
    def custom_validation(self, attrs):
        pass

    def validate(self, attrs):
        self._errors = {}
        try:
            self.user = User._default_manager.get(pk=urlsafe_base64_decode(attrs['uid']).decode())
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            raise ValidationError({'uid': ['Invalid value']})
        self.custom_validation(attrs)
        self.set_password_form = self.set_password_form_class(
            user=self.user, data=attrs
        )
        if not self.set_password_form.is_valid():
            raise serializers.ValidationError(self.set_password_form.errors)
        return attrs
    def save(self):
        return self.set_password_form.save()

        
class ActivitySerializer(serializers.ModelSerializer):
    coordinators = UserSerializer(many=True, read_only=True)
    volunteers = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Activity
        fields = '__all__'


class RideActivitySerializer(serializers.ModelSerializer):
    activity = ActivitySerializer(required=True)

    class Meta:
        model = RideActivity
        fields = ('activity', 'pickup_location', 'destination_location')

    def create(self, validated_data):
        activity_data = validated_data.pop('activity')
        activity = Activity.objects.create(**activity_data)
        return RideActivity.objects.create(activity=activity, **validated_data)


class MealActivitySerializer(serializers.ModelSerializer):
    activity = ActivitySerializer(required=True)
    class Meta:
        model = MealActivity
        fields = ('activity', 'delivery_location', 'dietary_restrictions')

    def create(self, validated_data):
        activity_data = validated_data.pop('activity')
        activity = Activity.objects.create(**activity_data)
        return MealActivity.objects.create(activity=activity, **validated_data)


class EventActivitySerializer(serializers.ModelSerializer):
    activity = ActivitySerializer(required=True)
    class Meta:
        model = EventActivity
        fields = ('activity', 'location')

    def create(self, validated_data):
        activity_data = validated_data.pop('activity')
        activity = Activity.objects.create(**activity_data)
        return EventActivity.objects.create(activity=activity, **validated_data)


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ('id', 'subject', 'message', 'date_time', 'show_on_page', 'community', 'user', 'author_name')

class WellWishSerializer(serializers.ModelSerializer):
    class Meta:
        model = WellWish
        fields = ('id', 'subject', 'message', 'date_time', 'community', 'user', 'author_name')

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ('id', 'name', 'link', 'description')

class DiscussionPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionPost
        fields = ('id', 'subject', 'message', 'date_time', 'community', 'user', 'author_name', 'section')