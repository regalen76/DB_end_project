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
import random
from datetime import datetime

# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['email'] = user.email
        token['gender'] = user.gender
        token['phone'] = user.phone
        token['address'] = user.address
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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def addToCart(request,qt,pk,ty):
    with connection.cursor() as cursor:
        current_user = request.user
        cursor.execute("IF EXISTS (SELECT * FROM cart WHERE userid = %s) BEGIN INSERT INTO cartitem (cartid,sizeid,quantity) SELECT cartid,sizeid, %s FROM productsize, cart WHERE productsize.productid = %s AND productsize.productsize = %s AND cart.userid = %s END ELSE BEGIN INSERT INTO cart (userid) VALUES (%s); INSERT INTO cartitem (cartid,sizeid,quantity) SELECT cartid,sizeid, %s FROM productsize, cart WHERE productsize.productid = %s AND productsize.productsize = %s AND cart.userid = %s; END",(current_user.id,qt,pk,ty,current_user.id,current_user.id,qt,pk,ty,current_user.id))
        cursor.execute("SELECT * FROM cartitem")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def order(request):
    with connection.cursor() as cursor:
        current_user= request.user
        cursor.execute("SELECT orderid, orderstatus FROM orderlist WHERE userid = %s",[current_user.id])
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ordercount(request):
    with connection.cursor() as cursor:
        current_user= request.user
        cursor.execute("SELECT COUNT(orderlist.orderid) FROM orderlist WHERE userid = %s AND orderstatus = 'pending'",[current_user.id])
        row = cursor.fetchall()
    return Response (row)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def orderid(request,pk):
    with connection.cursor() as cursor:
        current_user= request.user
        cursor.execute("SELECT orderlist.orderid,orderlist.receivername,orderlist.receiverphone,orderlist.receiveraddress,orderlist.orderdate,orderlist.totalpayment,paymentdetail.paymenttype,paymentdetail.vanumber,orderlist.orderstatus FROM orderlist JOIN paymentdetail ON orderlist.paymentid = paymentdetail.paymentid where orderlist.orderid = %s",[pk])
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def orderiditems(request,pk):
    with connection.cursor() as cursor:
        current_user= request.user
        cursor.execute("SELECT product.productname, productsize.productsize, product.price, orderitem.quantity FROM orderitem JOIN productsize ON orderitem.sizeid = productsize.sizeid JOIN product ON productsize.productid = product.productid WHERE orderitem.orderid = %s",[pk])
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
def pay(request,pk):
    with connection.cursor() as cursor:
        current_user= request.user
        cursor.execute("UPDATE orderlist SET orderstatus = 'paid' FROM orderlist JOIN paymentdetail ON orderlist.paymentid = paymentdetail.paymentid WHERE paymentdetail.vanumber = %s",[pk])
        cursor.execute("SELECT * FROM orderlist")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def submit(request,bank,name,phone,address,price,quantity,prodname,prodsize):
    with connection.cursor() as cursor:
        current_user= request.user
        r1 = random.randint(10000000000,99999999999)
        cursor.execute("BEGIN insert into paymentdetail (paymenttype,vanumber) values(%s,%s); insert into orderlist (userid,paymentid,receivername,receiverphone,receiveraddress,orderdate,totalpayment,orderstatus) SELECT %s,SCOPE_IDENTITY(),%s,%s,%s,%s,%s,'pending' FROM paymentdetail WHERE paymentdetail.vanumber = %s; insert into orderitem(orderid,sizeid,quantity) SELECT SCOPE_IDENTITY(),productsize.sizeid,%s from productsize JOIN product ON productsize.productid = product.productid WHERE product.productname=%s AND productsize.productsize = %s END",(bank,r1,current_user.id,name,phone,address,datetime.now(),price,r1,quantity,prodname,prodsize))
        cursor.execute("SELECT * FROM paymentdetail")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def submitcart(request,bank,name,phone,address,price):
    with connection.cursor() as cursor:
        current_user= request.user
        r1 = random.randint(10000000000,99999999999)
        cursor.execute("BEGIN insert into paymentdetail (paymenttype,vanumber) values(%s,%s); insert into orderlist (userid,paymentid,receivername,receiverphone,receiveraddress,orderdate,totalpayment,orderstatus) SELECT %s,SCOPE_IDENTITY(),%s,%s,%s,%s,%s,'pending' FROM paymentdetail WHERE paymentdetail.vanumber = %s; insert into orderitem(orderid,sizeid,quantity) SELECT SCOPE_IDENTITY(),cartitem.sizeid,cartitem.quantity FROM cartitem,cart WHERE cart.userid = %s AND cart.cartid = cartitem.cartid END",(bank,r1,current_user.id,name,phone,address,datetime.now(),price,r1,current_user.id))
        cursor.execute("SELECT * FROM paymentdetail")
        row = cursor.fetchall()
    return Response (row)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def deleteCart2(request):
    with connection.cursor() as cursor:
        current_user= request.user
        cursor.execute("DELETE cartitem FROM cartitem JOIN cart ON cartitem.cartid = cart.cartid AND cart.userid = %s",[current_user.id])
        cursor.execute("SELECT * FROM cartitem")
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