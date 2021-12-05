from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(response):
    return render(response, 'index.html', {})

def about(response):
    return render(response, 'about.html', {})

def shop(response):
    return render(response, 'shop.html', {})

def contact(response):
    return render(response, 'contact.html', {})
    
def shop_single(response):
    return render(response, 'shop-single.html', {})