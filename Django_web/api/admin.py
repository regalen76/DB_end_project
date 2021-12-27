from django.contrib import admin
from rest_framework import serializers
from .models import Account

# Register your models here.

class AccountAdmin(admin.ModelAdmin):
    list_display = ['id','username', 'password', 'email', 'first_name', 'last_name', 'phone', 'gender', 'address','date_joined','last_login','is_superuser','is_admin','is_staff']

admin.site.register(Account, AccountAdmin)