__author__ = 'danaadylova'
from django import forms

class UsernameForm(forms.Form):
    student_username = forms.CharField(label='Student username', max_length=100)