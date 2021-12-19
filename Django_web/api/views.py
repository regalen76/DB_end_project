from django.shortcuts import render
from rest_framework.relations import ManyRelatedField
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Customer
from .serializers import CustomerSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/about/',
            'method': 'GET',
            'body': None,
            'description': 'About page'
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