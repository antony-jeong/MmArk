from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    """ Custom User Model """

    # choices for language
    LANGUAGE_ENGLISH = "en"
    LANGUAGE_KOREAN = "kr"

    LANGUAGE_CHOICES = ((LANGUAGE_ENGLISH, "English"), (LANGUAGE_KOREAN, "Korean"))

    email = models.EmailField()
    avatar = models.ImageField(blank=True, upload_to="avatars")
    language = models.CharField(
        choices=LANGUAGE_CHOICES, max_length=2, blank=False, default=LANGUAGE_ENGLISH
    )
    superhost = models.BooleanField(default=False)
    desc = models.TextField()
    favorites = models.ManyToManyField('articles.Article', related_name="favorites", blank=True)