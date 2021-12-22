from django.contrib import admin
from rest_framework import serializers
from .models import Customer
from .serializers import CustomerSerializer

# Register your models here.

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['username', 'password', 'email', 'firstname', 'lastname', 'phone', 'gender', 'address']

admin.site.register(Customer, CustomerAdmin)