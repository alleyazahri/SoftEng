__author__ = 'danaadylova'
from django.forms import ModelForm
from django.contrib.auth.models import User

class StudentForm(ModelForm):
    class Meta:
        model = User # to identify for which class create a form
        fields = ['first_name', 'last_name', 'email', 'password']