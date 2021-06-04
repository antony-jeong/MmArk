from rest_framework import serializers
from .models import Article, Tag

class ArticleSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.username')
    class Meta:
        model = Article
        fields = ('id', 'title', 'created_time', 'modified_time', 'description', 'sheet_ds', 'author_name', 'tags', 'total_favorites')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'color', 'articles')