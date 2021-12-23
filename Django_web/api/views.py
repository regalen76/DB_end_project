from django.shortcuts import render
from rest_framework import status
from rest_framework import serializers
from rest_framework import permissions
from rest_framework.relations import ManyRelatedField
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.serializers import Serializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Customer
from .serializers import CustomerSerializer,RegistrationSerializer

# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['password'] = user.password
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            '/api/token',
            '/api/token/refresh',
            '/customers/',
            '/register/',
        },
    ]

    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCustomers(request):
    customers = Customer.objects.raw("SELECT * FROM Customer")
    serializer = CustomerSerializer(customers, many=True)
    return Response (serializer.data)

@api_view(['GET'])
def getCustomer(request, pk):
    customers = Customer.objects.raw("SELECT * FROM Customer WHERE customerID = %s",[pk])
    serializer = CustomerSerializer(customers, many=True)
    return Response (serializer.data)

@api_view(['POST',])
def registration_view(request):

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = "successfully registered a new user."
            data['email'] = account.email
            data['username'] = account.username
        else:
            data = serializer.errors
        return Response(data)