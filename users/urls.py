from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    path('', views.UserListCreate.as_view() ),
    path('<int:pk>/', views.UserDetailCreate.as_view() ),
]