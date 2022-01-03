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
    path('carts/<str:pk>/delete/', views.deleteCart, name='deletecart'),
    path('carts/<str:pk>/<str:qt>/update/', views.updateCart, name='updatecart'),
    path('shops/', views.getShop, name='shops'),
    path('shops/tshirt/', views.getShopTshirt, name='shops'),
    path('shops/sweater/', views.getShopSweater, name='shops'),
    path('shops/jeans/', views.getShopJeans, name='shops'),
    path('shops/shorts/', views.getShopShorts, name='shops'),
    path('items/<str:pk>/single/', views.getItemSingle, name='item_single'),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('register/', registration_view, name="register",)
]
