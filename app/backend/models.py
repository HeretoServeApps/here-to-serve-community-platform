from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField
from django.contrib.auth.models import ( AbstractBaseUser, BaseUserManager, PermissionsMixin )
from phone_field import PhoneField


class Community(models.Model):
    # Choices for community purpose
    CAREGIVING = 'C'
    ELDERLYCARE = 'E'
    MILITARY = 'M'
    VOLUNTEERING = 'V'
    PARENTING = 'P'
    SCHOOL = 'S'
    RELIGIOUS = 'R'
    PURPOSE_CHOICES = [
        (CAREGIVING, 'Caregiving'),
        (ELDERLYCARE, 'Eldercare & Long Term care'),
        (MILITARY, 'Military & Veterans Families'),
        (VOLUNTEERING, 'Volunteering'),
        (PARENTING, 'Parenting'),
        (SCHOOL, 'Schools'),
        (RELIGIOUS, 'Religious Groups'),
    ]

    # defaults were just for already existing rows, no real meaning
    name = models.CharField(max_length=128, blank=False, default='')
    purpose = models.CharField(max_length=128, choices=PURPOSE_CHOICES, blank=False, default=CAREGIVING)
    is_closed = models.BooleanField(blank=False, default=False)
    description = models.CharField(max_length=256, blank=False, default='')
    zipcode = models.IntegerField(blank=False, default=0)
    country = CountryField(blank_label='(select country)')
    coordinator = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class UserManager(BaseUserManager):
    def create_user(
        self, email, first_name, last_name, phone_number, role, password=None, 
        commit=True):

        if not first_name:
            raise ValueError(_('Users must have a first name'))
        if not last_name:
            raise ValueError(_('Users must have a last name'))
        if not phone_number:
            raise ValueError(_('Users must have a phone number'))
        if not email:
            raise ValueError(_('Users must have an email address'))
        if not role:
            raise ValueError(_('Users must have a role'))

        user = self.model(
                first_name=first_name,
                last_name=last_name,
                phone_number=phone_number,
                email=self.normalize_email(email),
                role=role
            )

        user.set_password(password)
        if commit:
            user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, phone_number, role, password=None, 
        commit=True):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            first_name=first_name,
            last_name=last_name,
            phone_number=phone_number,
            role=role,
            commit=False,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=150, blank=False)
    phone_number = PhoneField(blank=False)
    email = models.EmailField(max_length=255, unique=True)
    # password field supplied by AbstractBaseUser
    role = models.CharField(max_length=30, blank=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_number','role']

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def __str__(self):
        return '{} <{}>'.format(self.get_full_name(), self.email)



