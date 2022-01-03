from django.db import connection
from django.shortcuts import render
from rest_framework import status
from rest_framework import serializers
from rest_framework import permissions
from rest_framework.relations import ManyRelatedField
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.serializers import Serializer
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Account,Cart,Cartitem
from .serializers import RegistrationSerializer,AccountSerializer,PriceSerializer

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
            '/api/accounts',
            '/api/account',
            '/api/register/',
            '/api/price/',
            '/api/items/',
            '/api/carts/',
        },
    ]

    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAccount(request):
    current_user = request.user
    accounts = Account.objects.raw("SELECT * FROM api_account WHERE id = %s",[current_user.id])
    serializer = AccountSerializer(accounts, many=True)
    return Response (serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getAccounts(request):
    current_user = request.user
    accounts = Account.objects.raw("SELECT * FROM api_account")
    serializer = AccountSerializer(accounts, many=True)
    return Response (serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTotalPrice(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("UPDATE cart SET totalpayment = OtherTable.total_price FROM(SELECT SUM(cartitem.quantity * product.price) AS total_price FROM cartitem JOIN productsize ON cartitem.sizeid = productsize.sizeid JOIN product ON productsize.productid = product.productid,cart WHERE cart.userid = %s AND cart.cartid = cartitem.cartid) AS OtherTable WHERE cart.userid = %s",(current_user.id,current_user.id))
        cursor.execute("SELECT * FROM cart WHERE userid = %s",[current_user.id])
        row = cursor.fetchone()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTotalItem(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT COUNT(cartitemid) AS total_item FROM cartitem,cart WHERE cart.userid = %s AND cart.cartid = cartitem.cartid",[current_user.id])
        row = cursor.fetchone()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCart(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT product.productname,productsize.productsize,cartitem.quantity,product.price,cartitem.quantity * product.price AS subtotal,cartitem.cartitemid FROM cartitem JOIN productsize ON cartitem.sizeid = productsize.sizeid JOIN product ON productsize.productid = product.productid,cart WHERE cart.userid = %s AND cart.cartid = cartitem.cartid",[current_user.id])
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def deleteCart(request, pk):
    with connection.cursor() as cursor:
        cursor.execute("DELETE FROM cartitem WHERE cartitemid = %s",[pk])
        cursor.execute("SELECT * FROM cartitem")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def updateCart(request, pk, qt):
    with connection.cursor() as cursor:
        cursor.execute("UPDATE cartitem SET quantity = %s WHERE cartitemid = %s",(qt,pk))
        cursor.execute("SELECT * FROM cartitem")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
def getShop(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT * FROM product")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
def getShopTshirt(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT * FROM product where categoryid = 1")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
def getShopSweater(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT * FROM product where categoryid = 2")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
def getShopJeans(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT * FROM product where categoryid = 3")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
def getShopShorts(request):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT * FROM product where categoryid = 4")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getItemSingle(request,pk):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("SELECT product.productid, product.productname, product.productdesc, product.price FROM product WHERE product.productid = %s",[pk])
        row = cursor.fetchall()
    return Response (row)

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
            data['first_name']= account.first_name
            data['last_name']= account.last_name
            data['phone']=account.phone
            data['gender']=account.gender
            data['address']=account.address
        else:
            data = serializer.errors
        return Response(data)