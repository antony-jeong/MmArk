from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

@admin.register(models.Article)
class CustomArticleAdmin(admin.ModelAdmin):

    """Custom Article Admin"""

    readonly_fields=(
        "created_time",
        "modified_time",
    )

    # fieldsets
    fieldsets = (
        (
            "Custom Profiles",
            {
                "fields": (
                    "title",
                    "description",
                    "sheet_ds",
                    "author",
                    "tags",
                )
            },
        ),
    )

    list_display = (
        "title",
        "description",
        "sheet_ds",
        "author",
        "get_tags",
        "created_time",
        "modified_time",
        "total_favorites",
    )

    def get_tags(self, obj):
        return "\n".join([p.name for p in obj.tags.all()])


@admin.register(models.Tag)
class TagAdmin(admin.ModelAdmin):

    """Tag Admin"""

    list_display = ("name", "count_articles")

    def count_articles(self, obj):
        return obj.articles.count()