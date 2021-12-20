from django.shortcuts import render
from rest_framework.relations import ManyRelatedField
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Customer
from .serializers import CustomerSerializer

# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
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
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getCustomers(request):
    customers = Customer.objects.raw("SELECT * FROM Customer")
    serializer = CustomerSerializer(customers, many=True)
    return Response (serializer.data)

@api_view(['GET'])
def getCustomer(request, pk):
    customers = Customer.objects.raw("SELECT * FROM Customer WHERE customerID = %s",[pk])
    serializer = CustomerSerializer(customers, many=True)
    return Response (serializer.data)