from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class MyAccountManager(BaseUserManager):
	def create_user(self, email, username, password=None):
		if not email:
			raise ValueError('Users must have an email address')
		if not username:
			raise ValueError('Users must have a username')

		user = self.model(
			email=self.normalize_email(email),
			username=username,
		)

		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, email, username, password):
		user = self.create_user(
			email=self.normalize_email(email),
			password=password,
			username=username,
		)
		user.is_admin = True
		user.is_staff = True
		user.is_superuser = True
		user.save(using=self._db)
		return user

class Account(AbstractBaseUser):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True, auto_now=True)
    is_superuser = models.BooleanField(default=False)
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(max_length=254, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    phone = models.CharField(max_length=20)
    gender = models.CharField(max_length=10)
    address = models.CharField(max_length=300)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = MyAccountManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

class Cart(models.Model):
    cartid = models.BigIntegerField(primary_key=True)
    userid = models.ForeignKey(Account, models.DO_NOTHING, db_column='userid')
    totalpayment = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cart'

    def __int__(self):
        return self.cartid

class Cartitem(models.Model):
    cartitemid = models.BigIntegerField(primary_key=True)
    cartid = models.ForeignKey(Cart, models.DO_NOTHING, db_column='cartid')
    sizeid = models.ForeignKey('Productsize', models.DO_NOTHING, db_column='sizeid')
    quantity = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cartitem'

    def __int__(self):
        return self.cartitemid

class Category(models.Model):
    categoryid = models.BigIntegerField(primary_key=True)
    categoryname = models.CharField(max_length=20, blank=True, null=True)
    totalpercategory = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'category'

    def __int__(self):
        return self.categoryid

class Orderitem(models.Model):
    orderitemid = models.BigIntegerField(primary_key=True)
    orderid = models.ForeignKey('Orderlist', models.DO_NOTHING, db_column='orderid')
    sizeid = models.ForeignKey('Productsize', models.DO_NOTHING, db_column='sizeid')
    quantity = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'orderitem'

    def __int__(self):
        return self.orderitemid

class Orderlist(models.Model):
    orderid = models.BigIntegerField(primary_key=True)
    userid = models.ForeignKey(Account, models.DO_NOTHING, db_column='userid')
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

    def __int__(self):
        return self.orderid

class Paymentdetail(models.Model):
    paymentid = models.BigIntegerField(primary_key=True)
    paymenttype = models.CharField(max_length=20, blank=True, null=True)
    transactiontime = models.DateTimeField(blank=True, null=True)
    paymentstatus = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'paymentdetail'

    def __int__(self):
        return self.paymentid

class Product(models.Model):
    productid = models.BigIntegerField(primary_key=True)
    categoryid = models.ForeignKey(Category, models.DO_NOTHING, db_column='categoryid')
    productname = models.CharField(max_length=50, blank=True, null=True)
    productdesc = models.CharField(max_length=300, blank=True, null=True)
    price = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'product'

    def __int__(self):
        return self.productid

class Productsize(models.Model):
    sizeid = models.BigIntegerField(primary_key=True)
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='productid')
    productsize = models.CharField(max_length=5, blank=True, null=True)
    stock = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'productsize'

    def __int__(self):
        return self.sizeid

class Reviewid(models.Model):
    reviewid = models.BigIntegerField(primary_key=True)
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='productid')
    orderid = models.ForeignKey(Orderlist, models.DO_NOTHING, db_column='orderid')
    rating = models.DecimalField(max_digits=18, decimal_places=0, blank=True, null=True)
    note = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'reviewid'

    def __int__(self):
        return self.reviewid