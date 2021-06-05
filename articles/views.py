from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, generics
from .serializers import ArticleSerializer, TagSerializer
from .models import Article, Tag
from .serializers import ArticleSerializer, TagSerializer
from .permissions import IsOwnerOrReadOnly
from users import models as user_models
import json

class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,permissions.AllowAny)

class ArticleDetailCreate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,permissions.AllowAny)

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

@csrf_exempt
def new_post(request):
    if request.method == 'POST':
        form_data = json.loads(request.body.decode())
        author=user_models.User.objects.get(
            username=form_data['username']
        )
        new_article=Article.objects.create(
            title=form_data['title'],
            description=form_data['description'],
            sheet_ds=form_data['sheet_ds'],
            author=author,
            tags=[]
        )
        for tag in form_data['tags']:
            if (tag != ""):
                tag_obj = Tag.objects.get(
                    name=tag
                )
                new_article.tags.add(tag_obj)
        new_article.save()
    return new_article;

