from django.contrib import admin
from .models import Customer

# Register your models here.

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['username', 'password', 'email', 'firstname', 'lastname', 'phone', 'gender', 'address']

admin.site.register(Customer, CustomerAdmin)