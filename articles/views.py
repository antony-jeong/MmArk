from rest_framework import permissions, generics
from .serializers import ArticleSerializer, TagSerializer
from .models import Article, Tag
from users import models as user_models
from .serializers import ArticleSerializer, TagSerializer
from rest_framework import generics
from django.shortcuts import render
from .permissions import IsOwnerOrReadOnly

class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
class ArticleDetailCreate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

class TagListCreate(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class TagDetailCreate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

def main_page(request):
    return render(request, "main.html")
