"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from articles import views as article_views

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include("users.urls", namespace="users")),
#     path('token-auth/', obtain_jwt_token)    


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("users.urls", namespace= "users")),
    path('plz/', article_views.new_post),
    path('fav/', article_views.fav_post),
    path('token-auth/', obtain_jwt_token),
    path('', article_views.main_page)
]

