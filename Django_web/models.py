# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class ApiAccount(models.Model):
    id = models.BigAutoField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(unique=True, max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    phone = models.CharField(max_length=20)
    gender = models.CharField(max_length=10)
    address = models.CharField(max_length=300)
    is_admin = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'api_account'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class Cart(models.Model):
    cartid = models.BigIntegerField(primary_key=True)
    userid = models.ForeignKey(ApiAccount, models.DO_NOTHING, db_column='userid')
    totalpayment = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cart'


class Cartitem(models.Model):
    cartitemid = models.BigIntegerField(primary_key=True)
    cartid = models.ForeignKey(Cart, models.DO_NOTHING, db_column='cartid')
    sizeid = models.ForeignKey('Productsize', models.DO_NOTHING, db_column='sizeid')
    quantity = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cartitem'


class Category(models.Model):
    categoryid = models.BigIntegerField(primary_key=True)
    categoryname = models.CharField(max_length=20, blank=True, null=True)
    totalpercategory = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'category'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(ApiAccount, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Orderitem(models.Model):
    orderitemid = models.BigIntegerField(primary_key=True)
    orderid = models.ForeignKey('Orderlist', models.DO_NOTHING, db_column='orderid')
    sizeid = models.ForeignKey('Productsize', models.DO_NOTHING, db_column='sizeid')
    quantity = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'orderitem'


class Orderlist(models.Model):
    orderid = models.BigIntegerField(primary_key=True)
    userid = models.ForeignKey(ApiAccount, models.DO_NOTHING, db_column='userid')
    paymentid = models.ForeignKey('Paymentdetail', models.DO_NOTHING, db_column='paymentid')
    receivername = models.CharField(max_length=150, blank=True, null=True)
    receiverphone = models.CharField(max_length=20, blank=True, null=True)
    receiveraddress = models.CharField(max_length=300, blank=True, null=True)
    orderdate = models.DateTimeField(blank=True, null=True)
    totalpayment = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    orderstatus = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'orderlist'


class Paymentdetail(models.Model):
    paymentid = models.BigIntegerField(primary_key=True)
    paymenttype = models.CharField(max_length=20, blank=True, null=True)
    transactiontime = models.DateTimeField(blank=True, null=True)
    paymentstatus = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'paymentdetail'


class Product(models.Model):
    productid = models.BigIntegerField(primary_key=True)
    categoryid = models.ForeignKey(Category, models.DO_NOTHING, db_column='categoryid')
    productname = models.CharField(max_length=50, blank=True, null=True)
    productdesc = models.CharField(max_length=300, blank=True, null=True)
    price = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'product'


class Productsize(models.Model):
    sizeid = models.BigIntegerField(primary_key=True)
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='productid')
    productsize = models.CharField(max_length=5, blank=True, null=True)
    stock = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'productsize'


class Reviewid(models.Model):
    reviewid = models.BigIntegerField(primary_key=True)
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='productid')
    orderid = models.ForeignKey(Orderlist, models.DO_NOTHING, db_column='orderid')
    rating = models.DecimalField(max_digits=18, decimal_places=0, blank=True, null=True)
    note = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'reviewid'


class Sysdiagrams(models.Model):
    name = models.CharField(max_length=128)
    principal_id = models.IntegerField()
    diagram_id = models.AutoField(primary_key=True)
    version = models.IntegerField(blank=True, null=True)
    definition = models.BinaryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sysdiagrams'
        unique_together = (('principal_id', 'name'),)
