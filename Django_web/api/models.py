from django.db import models

# Create your models here.
class Customer(models.Model):
    customerid = models.CharField(db_column='customerID', primary_key=True, max_length=50)  # Field name made lowercase.
    username = models.CharField(db_column='userName', max_length=50)  # Field name made lowercase.
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50, blank=True, null=True)
    firstname = models.CharField(db_column='firstName', max_length=50)  # Field name made lowercase.
    lastname = models.CharField(db_column='lastName', max_length=50)  # Field name made lowercase.
    phone = models.CharField(max_length=50, blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Customer'
    def __str__(self):
        return self.customerid
