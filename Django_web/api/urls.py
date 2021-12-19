from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('customers/', views.getCustomers, name='customers'),
    path('customers/<str:pk>/', views.getCustomer, name='customer'),
]
