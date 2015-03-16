__author__ = 'danaadylova'
from django.forms import ModelForm
from main.models import *
from django.contrib.auth.models import User

# class UsernameForm(forms.Form):
#     student_username = forms.CharField(label='Student username', max_length=100)

class ProblemForm(ModelForm):
    class Meta:
        model = Problem # to identify for which class create a form

class UserForm(ModelForm):
    class Meta:
        model = User # to identify for which class create a form
        fields = ['first_name', 'last_name', 'email', 'password']

class TeacherForm(ModelForm):
    class Meta:
        model = User # to identify for which class create a form
        fields = ['first_name', 'last_name', 'email', 'password']