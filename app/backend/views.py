import json, uuid
from datetime import datetime, time

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail, send_mass_mail, EmailMultiAlternatives, BadHeaderError
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.template import loader
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.utils.decorators import method_decorator
from django.views.decorators.debug import sensitive_post_parameters
from django.conf import settings 

from rest_framework import viewsets, permissions, status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import (
    CommunitySerializer, UserSerializer, CommunityUserRoleSerializer, UserSerializerWithToken, 
    PasswordResetConfirmSerializer, ActivitySerializer, RideActivitySerializer, MealActivitySerializer, UserSerializerWithID,
    EventActivitySerializer, AnnouncementSerializer, CustomSectionSerializer, WellWishSerializer
)
from .models import (
    Community, User, CommunityUserRole, Activity, EventActivity, MealActivity, RideActivity, Announcement, CustomSection, WellWish
)


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

    def get_queryset(self):
        email = self.request.query_params.get('email')
        return User.objects.filter(email=email)
    

class UserViewUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
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


class CommunityCustomSections(viewsets.ModelViewSet):
    """
        Gets all custom sections for a community
        """
    queryset = CustomSection.objects.all()
    serializer_class = CustomSectionSerializer

    def get_queryset(self):
        community_name = self.request.query_params.get('name')
        sections = CustomSection.objects.filter(community__name=community_name)
        return sections


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


class CommunityCoordinatorsList(generics.ListAPIView):

    def get(self, request, community_id):
        user_ids = CommunityUserRole.objects.filter(community=community_id, role__in=['COORDINATOR', 'COMM_LEADER']).values_list('user', flat=True)
        users = User.objects.filter(id__in=user_ids).values("id", "first_name", "last_name", "email", "phone_number_1")
        serializer = UserSerializerWithID(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ActivityViewSet(viewsets.ViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        user_comms = request.user.communityuserrole_set.values_list("community", flat=True)
        queryset = Activity.objects.filter(community__in=user_comms)
        serializer = ActivitySerializer(queryset, many=True)

        for activity in serializer.data:
            # Depending on the type of activity, we add necessary fields to the result
            if activity['activity_type'] == 'Giving Rides':
                ride_activity_obj = get_object_or_404(RideActivity.objects.all(), pk=activity['id'])
                ride_activity_serializer = RideActivitySerializer(ride_activity_obj)
                for item in ride_activity_serializer.data:
                    activity[item] = ride_activity_serializer.data[item]
            elif activity['activity_type'] == 'Preparing Meals':
                preparing_meal_obj = get_object_or_404(MealActivity.objects.all(), pk=activity['id'])
                preparing_meal_serializer = MealActivitySerializer(preparing_meal_obj)
                for item in preparing_meal_serializer.data:
                    if(item == 'dietary_restrictions'):
                        # Since dietary restrictions is a string, we want to convert it to a map and process it
                        restrictions_string = preparing_meal_serializer.data[item]
                        json_acceptable_string = restrictions_string.replace("'", "\"")
                        restrictions_map = json.loads(json_acceptable_string)
                        true_restrictions = []
                        for restriction in restrictions_map:
                            if restrictions_map[restriction]:
                                restriction = restriction.split('-')[0]
                                true_restrictions.append(restriction)
                        activity[item] = true_restrictions
                    else:
                        activity[item] = preparing_meal_serializer.data[item]
            else:
                all_other_activity_obj = get_object_or_404(EventActivity.objects.all(), pk=activity['id'])
                all_other_activity_serializer = EventActivitySerializer(all_other_activity_obj)
                for item in all_other_activity_serializer.data:
                    activity[item] = all_other_activity_serializer.data[item]
            
            # Activity with type 'Occasion' has a different color 
            if activity['activity_type'] == 'Occasion':
                activity['color'] = '#e6a940'
            # Depending on the outcome of [volunteers needed - volunteers signed up], we change the color of the activity
            else:
                # If all volunteer spots have been filled, color this activity blue
                if int(activity['num_volunteers_needed']) - len(activity['volunteers']) == 0:
                    activity['color'] = '#60a1db'
                else: # Otherwise color it green
                    activity['color'] = '#46b378'
                
                # Data for the activity report page
                minutes_per_volunteer = float((activity['est_hours']*60 + activity['est_minutes']))/float(activity['num_volunteers_needed'])
                activity['est_hours_per_volunteer'] = minutes_per_volunteer//60
                activity['est_minutes_per_volunteer'] = minutes_per_volunteer - activity['est_hours_per_volunteer']*60

                if len(activity['volunteers']) > 0:
                    minutes_per_volunteer_actual = float((activity['est_hours']*60 + activity['est_minutes']))/float(len(activity['volunteers']))
                    activity['actual_hours_per_volunteer'] = minutes_per_volunteer_actual//60
                    activity['actual_minutes_per_volunteer'] = minutes_per_volunteer_actual - activity['actual_hours_per_volunteer']*60
                else:
                    activity['actual_hours_per_volunteer'] = 0
                    activity['actual_minutes_per_volunteer'] = 0

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
        data = request.data
        dates = data.pop('dates')
        start_time = datetime.strptime(data.pop('start_time'), '%I:%M %p').time()
        end_time = datetime.strptime(data.pop('end_time'), '%I:%M %p').time()
        pickup_location = data.pop('pickup_location')
        destination_location = data.pop('destination_location')
        location = data.pop('location')
        dietary_restrictions = data.pop('dietary_restrictions')
        coordinators = data.pop('coordinators')
        data['event_batch'] = uuid.uuid4()

        # creating a new <Type>Activity object for each date selected
        activities = []
        for date in dates:
            date = datetime.strptime(date, '%Y-%m-%dT%H:%M:%S.%fZ')
            data['start_time'] = datetime.combine(date, start_time).isoformat()
            data['end_time'] = datetime.combine(date, end_time).isoformat()
            new_activity = {'activity': data.copy()}
            # adding the type-specific fields based on activity_type
            if(data['activity_type'] == 'Giving Rides'):
                new_activity['pickup_location'] = pickup_location
                new_activity['destination_location'] = destination_location
            elif(data['activity_type'] == 'Preparing Meals'):
                new_activity['delivery_location'] = location
                new_activity['dietary_restrictions'] = json.dumps(dietary_restrictions)
            else:
                new_activity['location'] = location
            activities.append(new_activity)

        if(request.data['activity_type'] == 'Giving Rides'):
            serializer = RideActivitySerializer(data=activities, many=True)
        elif(request.data['activity_type'] == 'Preparing Meals'):
            serializer = MealActivitySerializer(data=activities, many=True)
        else:
            serializer = EventActivitySerializer(data=activities, many=True)

        if serializer.is_valid():
            created_instances = serializer.save()
            # once the activities have been created in the database, add the selected coordinators for the coordinator ManyToMany field
            for specific_activity in created_instances:
                specific_activity.activity.coordinators.add(*User.objects.filter(id__in=coordinators))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all().order_by('name')
    serializer_class = AnnouncementSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name')
        zipcode = self.request.query_params.get('zipcode')
        is_closed = self.request.query_params.get('is_closed')
        comm = Community.objects.filter(name=name, zipcode=zipcode, is_closed=is_closed).values_list('id')
        anns = Announcement.objects.all().filter(community__in=comm).select_related('user')
        for ann in anns:
            ann.author_name = ann.user.first_name + ' ' + ann.user.last_name
        return anns

class AddAnnouncement(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        community_name = request.data['community']
        user_email = request.data['user']
        community = Community.objects.get(name=community_name).id
        user = User.objects.get(email=user_email).id
        request.data['community'] = community
        request.data['user'] = user
        serializer = AnnouncementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteAnnouncement(APIView):
    permission_classes = (permissions.AllowAny,)

    def delete(self, request, format=None):
        id = request.data['id']
        Announcement.objects.get(id=id).delete()
        return Response('Deleted announcement')

class EditAnnouncement(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        id = request.data['id']
        subject = request.data['subject']
        message = request.data['message']
        announcement = Announcement.objects.get(id=id)
        announcement.subject = subject
        announcement.message = message
        announcement.save()
        return Response('Edited announcement')

class CommunityPeopleList(APIView):
    """
    Get names of people in the same community as the request's user.
    """
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, format=None):
        request_dict = json.loads(list(request.query_params.values())[0])
        community_name = request_dict['community']
        user_email = request_dict['user']
        community, user = None, None
        try:
            community = Community.objects.get(name=community_name).id
        except Community.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            user = User.objects.get(email=user_email).id
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Get the role of the user in the community to determine viewing permission
        user_role = CommunityUserRole.objects.get(user=user, community=community).role

        # Get all the members' pk of the community
        community_people = CommunityUserRole.objects.filter(community=community).values_list('user', 'role')
        
        community_roles_map = dict(CommunityUserRole.COMMUNITY_ROLE_CHOICES)

        people_list = []
        for pk, role in community_people:
            member = User.objects.get(pk=pk)
            people_list.append({
                'first_name': member.first_name,
                'last_name': member.last_name,
                'email': member.email,
                'phone_number_1': member.phone_number_1,
                'phone_number_type_1': member.phone_number_1_type,
                'role': community_roles_map[role],
                'phone_number_2': member.phone_number_2,
                'phone_number_2_type': member.phone_number_2_type,
                'address_line_1': member.address_line_1,
                'address_line_2': member.address_line_2,
                'city': member.city,
                'state': member.state,
                'country': member.country,
                'zipcode': member.zipcode,
                'pk': member.id,
            })

        return Response({
                'user_role' : community_roles_map[user_role],
                'people': people_list,
            }, 
            status=status.HTTP_200_OK
        )


class InviteUsers(APIView):
    """
    Let a commmunity leader or admin email invitations to a group of emails. 
    """
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request, format=None):
        data = request.data
        from_email = data['from_email']
        to_emails = list(data['to_emails'])
        community = data['community']
        sender_name = data['sender']

        subject = '[Here to Serve] Join {community}\'s Care Community'.format(community=community)
        message = '{sender} has invited you to join {community}\'s Care Community.' \
                    ' Please go to {url} to access the volunteer platform.'.format(
                        sender=sender_name, community=community, url='http://localhost:3000/'
                    )

        messages = []
        for recipient in to_emails:
            item = (subject, message, from_email, [recipient]) 
            messages.append(item)

        # send_mass_email prevent recipients from seeing other recipients' email addresses. 
        try:
            send_mass_mail(
                tuple(messages),
                fail_silently = False,
            )
        except BadHeaderError:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)

class WellWishViewSet(viewsets.ModelViewSet):
    queryset = WellWish.objects.all().order_by('name')
    serializer_class = WellWishSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name')
        zipcode = self.request.query_params.get('zipcode')
        is_closed = self.request.query_params.get('is_closed')
        comm = Community.objects.filter(name=name, zipcode=zipcode, is_closed=is_closed).values_list('id')
        anns = WellWish.objects.all().filter(community__in=comm).select_related('user')
        for ann in anns:
            ann.author_name = ann.user.first_name + ' ' + ann.user.last_name
        return anns

class AddWellWish(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        community_name = request.data['community']
        user_email = request.data['user']
        community = Community.objects.get(name=community_name).id
        user = User.objects.get(email=user_email).id
        request.data['community'] = community
        request.data['user'] = user
        serializer = WellWishSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteWellWish(APIView):
    permission_classes = (permissions.AllowAny,)

    def delete(self, request, format=None):
        id = request.data['id']
        WellWish.objects.get(id=id).delete()
        return Response('Deleted well wish')

class EditWellWish(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        id = request.data['id']
        subject = request.data['subject']
        message = request.data['message']
        wellwish = WellWish.objects.get(id=id)
        wellwish.subject = subject
        wellwish.message = message
        wellwish.save()
        return Response('Edited well wish')

class EditWaysToHelp(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        name = request.data['name']
        zipcode = request.data['zipcode']
        is_closed = request.data['is_closed']
        community = Community.objects.get(name=name, zipcode=zipcode, is_closed=is_closed)
        community.ways_to_help = request.data['ways_to_help']
        community.save()
        return Response('Edited ways to help')