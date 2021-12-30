from django.contrib import admin
from rest_framework import serializers
from .models import Account,Cart,Cartitem,Category,Orderitem,Orderlist,Paymentdetail,Product,Productsize,Reviewid

# Register your models here.

class AccountAdmin(admin.ModelAdmin):
    list_display = ['id','username', 'password', 'email', 'first_name', 'last_name', 'phone', 'gender', 'address','date_joined','last_login','is_superuser','is_admin','is_staff']

class CartAdmin(admin.ModelAdmin):
    list_display = ['cartid','userid','totalpayment']

class CartitemAdmin(admin.ModelAdmin):
    list_display = ['cartitemid','cartid','sizeid','quantity']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['categoryid','categoryname','totalpercategory']

class OrderitemAdmin(admin.ModelAdmin):
    list_display = ['orderitemid','orderid','sizeid','quantity']

class OrderlistAdmin(admin.ModelAdmin):
    list_display = ['orderid','userid','paymentid','receivername','receiverphone','receiveraddress','orderdate','totalpayment','orderstatus']

class PaymentdetailAdmin(admin.ModelAdmin):
    list_display = ['paymentid','paymenttype','transactiontime','paymentstatus']

class ProductAdmin(admin.ModelAdmin):
    list_display = ['productid','categoryid','productname','productdesc','price']

class ProductsizeAdmin(admin.ModelAdmin):
    list_display = ['sizeid','productid','productsize','stock']

class ReviewidAdmin(admin.ModelAdmin):
    list_display = ['reviewid','productid','orderid','rating','note']

admin.site.register(Account, AccountAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Cartitem,CartitemAdmin)
admin.site.register(Category,CategoryAdmin)
admin.site.register(Orderitem,OrderitemAdmin)
admin.site.register(Orderlist,OrderlistAdmin)
admin.site.register(Paymentdetail,PaymentdetailAdmin)
admin.site.register(Product,ProductAdmin)
admin.site.register(Productsize,ProductsizeAdmin)
admin.site.register(Reviewid,ReviewidAdmin)