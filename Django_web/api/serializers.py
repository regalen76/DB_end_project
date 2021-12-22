from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Customer,AuthUser

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

class CustomerSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Customer
        fields='__all__'

class RegistrationSerializer(ModelSerializer):
    
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = AuthUser
        fields =    ['email', 'username', 'password', 'password2']
        extra_kwargs = {
                'password': {'write_only': True}
        }
    
    def save(self):
        account = AuthUser(
                    email=self.validated_data['email'],
                    username=self.validated_data['username'],
            )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        account.set_password(password)
        account.save()
        return account