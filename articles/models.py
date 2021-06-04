from django.db import models
from users import models as user_models
import json

class Tag(models.Model):
    """ Tag Model """

    name = models.CharField(max_length=20, null=False)
    color = models.TextField(default="cyan")

    class Meta:
        verbose_name_plural = "Tags"


class Article(models.Model):

    """ Custom Article Model """

    title = models.CharField(max_length=50, blank=False)
    created_time = models.DateTimeField(auto_now_add=True)
    modified_time = models.DateTimeField(auto_now=True)
    description = models.TextField()
    sheet_ds = models.JSONField()
    author = models.ForeignKey(user_models.User, related_name='articles', on_delete=models.CASCADE, blank=True)
    tags = models.ManyToManyField(Tag, related_name="articles", blank=True)

    def save(self, *args, **kwargs):
        self.title = str.capitalize(self.title)
        self.description = str.capitalize(self.description)
        super().save(*args, **kwargs) 

    def total_favorites(self):
        all_favorites = self.favorites.all()
        user_ids = []
        for i in all_favorites:
            user_ids.append(i.id)
        return user_ids

    class Meta:
        verbose_name_plural = "Articles"
