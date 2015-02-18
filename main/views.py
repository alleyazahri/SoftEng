from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import *

@login_required
def home(request):
    #    teacher_table = Teacher.objects.teachers_for_user(request.user)
    return render(request, "main/home.html")