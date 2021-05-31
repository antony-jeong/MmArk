from django.urls import path
from . import views
from articles import views as article_views

app_name = "users"

urlpatterns = [
    path('users/', views.UserListCreate.as_view() ),
    path('users/<int:pk>/', views.UserDetailCreate.as_view() ),
    path('articles/', article_views.ArticleListCreate.as_view()),
    path('articles/<int:pk>/', article_views.ArticleDetailCreate.as_view() ),
    path('tags/', article_views.TagListCreate.as_view()),
    path('tags/<int:pk>/', article_views.TagDetailCreate.as_view() ),
]