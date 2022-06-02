from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Profile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_picture = models.URLField(default="")
    license_id = models.URLField(default="")
    bio = models.CharField(default="", max_length=500)


class Product(models.Model):
    product_id = models.primary_key( on_delete=models.CASCADE)
    product_picture = models.URLField(default="")
    product_desc = models.CharField(default="", max_length=500)
    product_location = models.CharField(default="", max_length=75)
    product_price = models.FloatField()

