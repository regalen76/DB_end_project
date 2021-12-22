from django.urls import path
from . import views
from .views import MyTokenObtainPairView, registration_view

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('customers/', views.getCustomers, name='customers'),
    path('customers/<str:pk>/', views.getCustomer, name='customer'),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('register/', registration_view, name="register",)
]
