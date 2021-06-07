from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, generics
from .serializers import ArticleSerializer, TagSerializer
from .models import Article, Tag
from .permissions import IsOwnerOrReadOnly
from users import models as user_models
from django.http.response import HttpResponse
import json

class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,permissions.AllowAny)

class ArticleDetailCreate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.AllowAny)    

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
        )
        for tag in form_data['tags']:
            if (tag != ""):
                tag_obj = Tag.objects.get(
                    name=tag
                )
                new_article.tags.add(tag_obj)
        new_article.save()
        return HttpResponse("post success")

    elif request.method == 'PATCH':
        form_data = json.loads(request.body.decode())
        article = Article.obejects.get(
            id=form_data['id']
        )
        author=user_models.User.objects.get(
            username=form_data['username']
        )
        article.title = form_data['title']
        article.description=form_data['description']
        article.sheet_ds=form_data['sheet_ds']
        article.author=author
        for tag in form_data['tags']:
            if (tag != ""):
                tag_obj = Tag.objects.get(
                    name=tag
                )
            article.tags.add(tag_obj)
        return HttpResponse("patch success")

    elif request.method == 'DELETE':
        toDelete = Article.objects.get(id=request.body)
        toDelete.delete()
        return HttpResponse("delete success")

@csrf_exempt
def fav_post(request):
    if request.method == 'POST':
        fav_data = json.loads(request.body.decode())
        toFav = Article.objects.get(id=fav_data["articleId"])
        curUser = user_models.User.objects.get(
            username=fav_data["user"]
        )
        if (toFav.favorites.filter(username=curUser.username)):
            toFav.favorites.remove(curUser)
            curUser.favorites.remove(toFav)
        else:
            toFav.favorites.add(curUser)
            curUser.favorites.add(toFav)
            
        return HttpResponse("fav success")

        
    