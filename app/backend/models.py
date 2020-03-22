from django.db import models


class Community(models.Model):
    name = models.CharField(max_length=128, blank=False)
    purpose = models.CharField(max_length=128, blank=False)
    is_closed = models.BooleanField(blank=False)
    description = models.CharField(max_lenngth=128, blank=False)
    zipcode = models.IntegerField(blank=False)
    country = models.CharField(max_length=128, blank=False)

    def __str__(self):
        return self.name
