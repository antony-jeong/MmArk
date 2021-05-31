from rest_framework import serializers
from .models import Article, Tag

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'created_time', 'modified_time', 'description', 'sheet_ds', 'author', 'tags', 'total_favorites')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'articles')