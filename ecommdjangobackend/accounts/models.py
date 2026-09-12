from django.contrib.auth.models import AbstractUser
from django.db import models


from .managers import CustomUserManager
# Create your models here.

class User(AbstractUser):
    username = None
    name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email
