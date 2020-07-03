import json, uuid

from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField
from django.contrib.auth.models import ( AbstractBaseUser, BaseUserManager, PermissionsMixin )
from django.utils import timezone
from phone_field import PhoneField
from django.conf import settings
from tinymce.models import HTMLField




class Community(models.Model):
    # defaults were just for already existing rows, no real meaning
    name = models.CharField(max_length=128, default='')
    is_closed = models.CharField(default='false', max_length=5)
    description = models.CharField(max_length=256, default='')
    zipcode = models.CharField(max_length=10, default='')
    country = models.CharField(max_length=128, default='US')
    ways_to_help = HTMLField(default='')

    def __str__(self):
        return self.name

class Resource(models.Model):
    name = models.CharField(max_length=128, blank=False)
    link = models.URLField(blank=False)
    description = models.CharField(max_length=128, blank=True)

class CustomSection(models.Model):
    # Choices for type
    GALLERY = 'GALLERY'
    RESOURCES = 'RESOURCES'
    DISCUSSIONS = 'DP'
    GENERAL = 'GENERAL'
    BUTTON = 'BUTTON'
    TYPE_CHOICES = [
        (GALLERY, 'Gallery'),
        (RESOURCES, 'Resources'),
        (DISCUSSIONS, 'Discussions and Pages'),
        (GENERAL, 'General'),
        (BUTTON, 'Button'),
    ]

    name = models.CharField(max_length=128, blank=False)
    type = models.CharField(max_length=128, choices=TYPE_CHOICES, blank=False, default=GENERAL)
    # For gallery, pages, general, and resources pages only
    link = models.URLField(blank=True)
    # For resources and general types only
    title = models.CharField(max_length=64, blank=True)
    description = models.CharField(max_length=128, blank=True)
    community = models.ForeignKey(Community, on_delete=models.CASCADE, null=False, blank=False)
    general_content = HTMLField(blank=True)

    def __str__(self):
        return self.name


class DiscussionPost(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=False, blank=False)
    author_name = models.CharField(max_length=50, blank=True)
    subject = models.CharField(max_length=100, blank=False)
    message = HTMLField()
    # making date/time and show strings for now
    date_time = models.CharField(max_length=100, blank=False)
    community = models.ForeignKey(Community, on_delete=models.CASCADE, null=False, blank=False)
    section = models.ForeignKey(CustomSection, on_delete=models.CASCADE, null=False, blank=False)

class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, phone_number_1, address_line_1='', address_line_2='', 
                    city='', state='', zipcode='', country='US', phone_number_1_type='mobile', phone_number_2='',
                    phone_number_2_type='', who_help='', how_learn='', how_help='', how_know='', skills_to_offer='', 
                    password=None, commit=True):

        if not first_name:
            raise ValueError(_('Users must have a first name'))
        if not last_name:
            raise ValueError(_('Users must have a last name'))
        if not phone_number_1:
            raise ValueError(_('Users must have a phone number'))
        if not email:
            raise ValueError(_('Users must have an email address'))

        user = self.model(
                first_name=first_name,
                last_name=last_name,
                email=self.normalize_email(email),
                address_line_1=address_line_1,
                address_line_2=address_line_2,
                city=city,
                state=state,
                zipcode=zipcode,
                country=country,
                phone_number_1=phone_number_1,
                phone_number_2=phone_number_2,
                phone_number_1_type=phone_number_1_type,
                phone_number_2_type=phone_number_2_type,
                how_learn=how_learn,
                who_help=who_help,
                how_help=how_help,
                how_know=how_know,
                skills_to_offer=skills_to_offer,
        )
        user.set_password(password)
        if commit:
            user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, phone_number_1, password=None, commit=True):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            first_name=first_name,
            last_name=last_name,
            phone_number_1=phone_number_1,
            commit=False,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):

    FAMILY = 'Family'
    FRIEND = 'Friend'
    FRIEND_OF_FRIEND = 'Friend of a friend'
    COWORKER = 'Coworker'
    ATTEND_SAME_SCHOOL = 'Attend the same school'
    NEIGHBOR = 'Neighbor'
    SOCIAL_MEDIA = 'Social Media'
    WORSHIP_TOGETHER = 'Worship together'
    DONT_PERSONALLY = 'Do not personally know'

    HOW_KNOW_CHOICES = [
        (FAMILY, 'Family'),
        (FRIEND, 'Friend'),
        (FRIEND_OF_FRIEND, 'Friend of a friend'),
        (COWORKER, 'Coworker'),
        (ATTEND_SAME_SCHOOL, 'Attend the same school'),
        (NEIGHBOR, 'Neighbor'),
        (SOCIAL_MEDIA, 'Social Media'),
        (WORSHIP_TOGETHER, 'Worship together'),
        (DONT_PERSONALLY, 'Do not personally know')
    ]

    INDIVIDUAL = 'As an individual volunteer'
    HOUSE_OF_WORSHIP = 'Through my house of worship'
    ORGANIZATION = 'Through a volunteer organization that I am a member of'

    HOW_HELP_CHOICES = [
        (INDIVIDUAL, 'As an individual volunteer'),
        (HOUSE_OF_WORSHIP, 'Through my house of worship'),
        (ORGANIZATION, 'Through a volunteer organization that I am a member of')
    ]

    NO_SELECTION = 'No Selection'
    CARED_HEALTH_CRISIS = 'Cared for someone with a life-threatening health crisis'
    HAD_HEALTH_CRISIS = 'I have had a life-threatening health crisis'
    HEALTHCARE_PROVIDER = 'Healthcare provider'
    TECH = 'Computer, technology, and social media'
    FINANCIAL = 'Accounting, financial services'
    CHILD_CARE = 'Provide licensed child care'
    LEGAL = 'Legal, attorney'
    COUNSELING = 'Counseling'
    HEALTH_INSURANCE = 'Skilled in complex health insurance issues'
    OTHER = 'Other'

    SKILLS_TO_OFFER = [
        (NO_SELECTION, 'No Selection'),
        (CARED_HEALTH_CRISIS, "Cared for someone with a life-threatening health crisis"),
        (HAD_HEALTH_CRISIS, "I have had a life-threatening health crisis"),
        (HEALTHCARE_PROVIDER, "Healthcare provider"),
        (TECH, "Computer, technology, and social media"),
        (FINANCIAL, "Accounting, financial services"),
        (CHILD_CARE, 'Provide licensed child care'),
        (LEGAL, "Legal, attorney"),
        (COUNSELING, "Counseling"),
        (HEALTH_INSURANCE, "Skilled in complex health insurance issues"),
        (OTHER, 'Other')
    ]

    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=150, blank=False)
    email = models.EmailField(max_length=255, unique=True)
    address_line_1 = models.CharField(max_length=150, blank=True, default='')
    address_line_2 = models.CharField(max_length=150, blank=True, default='')
    city = models.CharField(max_length=30, blank=True, default='')
    state = models.CharField(max_length=30, blank=True, default='')
    zipcode = models.CharField(max_length=10, blank=True, default='')
    country = models.CharField(max_length=128, blank=True, default='US')
    phone_number_1 = models.CharField(max_length=30, blank=True, default='')
    phone_number_1_type = models.CharField(max_length=30, blank=True, default='')
    phone_number_2 = models.CharField(max_length=30, blank=True, default='')
    phone_number_2_type = models.CharField(max_length=30, blank=True, default='')
    how_learn = models.TextField(blank=True, default='')
    who_help = models.CharField(max_length=256, blank=True, default='')
    how_help = models.CharField(
        max_length=128,
        choices=HOW_HELP_CHOICES,
        default=INDIVIDUAL,
        blank=False,
    )
    how_know = models.CharField(
        max_length=128,
        choices=HOW_KNOW_CHOICES,
        default=FRIEND,
        blank=False,
    )
    skills_to_offer = models.CharField(
        max_length=128,
        choices=SKILLS_TO_OFFER,
        default=NO_SELECTION,
        blank=False,
    )
    # password field supplied by AbstractBaseUser
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_number_1']

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def __str__(self):
        return '{} <{}>'.format(self.get_full_name(), self.email)


class CommunityUserRole(models.Model):
    ADMIN = 'ADMIN'
    COMM_LEADER = 'COMM_LEADER'
    COORDINATOR = 'COORDINATOR'
    COMM_MEMBER = 'COMM_MEMBER'
    COMMUNITY_ROLE_CHOICES = [
        (ADMIN, 'Administrator'),
        (COMM_LEADER, 'Community Leader'),
        (COORDINATOR, 'Coordinator'),
        (COMM_MEMBER, 'Community Member'),
    ]

    community = models.ForeignKey(Community, on_delete=models.CASCADE, null=False, blank=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=False, blank=False)
    role = models.CharField(
        max_length=11,
        choices=COMMUNITY_ROLE_CHOICES,
        default=COMM_MEMBER,
        blank=False,
    )

class Announcement(models.Model):
    TRUE = 'true'
    FALSE = 'false'

    SHOW_CHOICES = [
        (TRUE, 'true'),
        (FALSE, 'false')
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=False, blank=False)
    author_name = models.CharField(max_length=50, blank=True)
    subject = models.CharField(max_length=100, blank=False)
    message = HTMLField()
    # making date/time and show strings for now
    date_time = models.CharField(max_length=100, blank=False)
    show_on_page = models.CharField(
        max_length=5,
        choices=SHOW_CHOICES,
        default=TRUE,
        blank=False,
    )
    community = models.ForeignKey(Community, on_delete=models.CASCADE, null=False, blank=False)

class WellWish(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=False, blank=False)
    author_name = models.CharField(max_length=50, blank=True)
    subject = models.CharField(max_length=100, blank=False)
    message = HTMLField()
    # making date/time and show strings for now
    date_time = models.CharField(max_length=100, blank=False)
    community = models.ForeignKey(Community, on_delete=models.CASCADE, null=False, blank=False)

    
class Activity(models.Model):

    GIVING_RIDES = "Giving Rides"
    PREPARING_MEALS = "Preparing Meals"
    SHOPPING = "Shopping"
    CHILDCARE = "Childcare"
    LAUNDRY = "Laundry"
    HOUSE_CLEANING = "House Cleaning"
    PET_CARE = "Pet Care"
    VISITS = "Visits"
    MISCELLANEOUS = "Miscellaneous"
    OCCASION = "Occasion"

    ACTIVITY_TYPE_CHOICES = [
        (GIVING_RIDES, "Giving Rides"),
        (PREPARING_MEALS, "Preparing Meals"),
        (SHOPPING, "Shopping"),
        (CHILDCARE, "Childcare"),
        (LAUNDRY, "Laundry"),
        (HOUSE_CLEANING, "House Cleaning"),
        (PET_CARE, "Pet Care"),
        (VISITS, "Visits"),
        (MISCELLANEOUS, "Miscellaneous"),
        (OCCASION, "Occasion")
    ]

    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    activity_type = models.CharField(
        max_length=20,
        choices=ACTIVITY_TYPE_CHOICES,
        default=OCCASION
    )
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True, default='')

    start_time = models.DateTimeField(default=timezone.now)
    end_time = models.DateTimeField(blank=True, null=True)
    all_day = models.BooleanField(default=False)

    # event(s) in an event batch will share a unique ID 
    # non-recurring events will be the only event in their batch
    # used to relate and manage recurring events
    event_batch = models.UUIDField(default=uuid.uuid4)

    est_hours = models.IntegerField(blank=True, null=True)
    est_minutes = models.IntegerField(blank=True, null=True)
    num_volunteers_needed = models.IntegerField(default=1)
    coordinators = models.ManyToManyField(User, related_name="coordinators")
    volunteers = models.ManyToManyField(User, related_name="volunteers")

class RideActivity(models.Model):
    activity = models.OneToOneField(
        Activity,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    pickup_location = models.CharField(max_length=150, blank=True, default='')
    destination_location = models.CharField(max_length=150, blank=True, default='')


class MealActivity(models.Model):
    activity = models.OneToOneField(
        Activity,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    delivery_location = models.CharField(max_length=150, blank=True, default='')
    dietary_restrictions = models.CharField(max_length=500, blank=True, default='None')

    def set_dietary_restrictions(self, restrs):
        self.dietary_restrictions = json.dumps(restrs)

    def get_dietary_restrictions(self):
        return json.loads(self.dietary_restrictions)


class EventActivity(models.Model):
    activity = models.OneToOneField(
        Activity,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    location = models.CharField(max_length=150, blank=True, default='')

