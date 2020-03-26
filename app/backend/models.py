from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField


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
