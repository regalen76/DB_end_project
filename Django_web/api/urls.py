from django.urls import path
from . import views
from .views import MyTokenObtainPairView, registration_view

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('accounts/', views.getAccounts, name='accounts'),
    path('account/', views.getAccount, name='accounts'),
    path('price/', views.getTotalPrice, name='Prices'),
    path('items/', views.getTotalItem, name='Prices'),
    path('carts/', views.getCart, name='carts'),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('register/', registration_view, name="register",)
]
