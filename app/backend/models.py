from django.db import models


class Community(models.Model):
    name = models.CharField(max_length=128, blank=False)
    is_closed = models.BooleanField(blank=False)

    def __str__(self):
        return self.name
