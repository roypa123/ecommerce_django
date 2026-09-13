from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=150, unique=True)
    image = models.ImageField(upload_to='catgories/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    