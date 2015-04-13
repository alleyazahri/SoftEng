__author__ = 'danaadylova'
from django.forms import ModelForm
from django.contrib.auth.models import User
from main.models import *
from django import forms

class StudentForm(ModelForm):
    class Meta:
        model = User # to identify for which class create a form
        fields = ['first_name', 'last_name', 'email', 'password']

class ScoreForm(ModelForm): # The form that saves new scores from students
    class Meta:
        model = Score
        fields = ['level', 'student', 'score']
        widgets = {'level': forms.HiddenInput(), 'student': forms.HiddenInput(), 'score': forms.HiddenInput()} # Make the form hidden using widgets.