from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Account,Cart

class DynamicFieldsModelSerializer(ModelSerializer):
    """
    A ModelSerializer that takes an additional `fields` argument that
    controls which fields should be displayed.
    """

    def __init__(self, *args, **kwargs):
        # Don't pass the 'fields' arg up to the superclass
        fields = kwargs.pop('fields', None)

        # Instantiate the superclass normally
        super().__init__(*args, **kwargs)

        if fields is not None:
            # Drop any fields that are not specified in the `fields` argument.
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)

class AccountSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Account
        fields='__all__'

class PriceSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Cart
        fields='__all__'

class RegistrationSerializer(ModelSerializer):
    
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields =    ['email', 'username', 'password', 'password2','first_name','last_name','phone','gender','address' ]
        extra_kwargs = {
                'password': {'write_only': True}
        }
    
    def save(self):
        account = Account(
                    email=self.validated_data['email'],
                    username=self.validated_data['username'],
                    first_name=self.validated_data['first_name'],
                    last_name=self.validated_data['last_name'],
                    phone=self.validated_data['phone'],
                    gender=self.validated_data['gender'],
                    address=self.validated_data['address']
            )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        account.set_password(password)
        account.save()
        return account