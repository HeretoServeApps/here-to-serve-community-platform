from django.db import models
from django.contrib.auth.models import User


class Community(models.Model):
    # defaults were just for already existing rows, no real meaning
    name = models.CharField(max_length=128, blank=False, default='')
    purpose = models.CharField(max_length=128, blank=False, default='')
    is_closed = models.BooleanField(blank=False, default=False)
    description = models.CharField(max_length=256, blank=False, default='')
    zipcode = models.IntegerField(blank=False, default=0)
    country = models.CharField(max_length=128, blank=False, default='')
    coordinator = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
