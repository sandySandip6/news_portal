from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('editor', 'Editor'),
        ('journalist', 'Journalist'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='journalist')
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username