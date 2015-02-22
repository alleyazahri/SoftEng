from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from main.models import *

# Create your views here.

@login_required
def teacherhome(request):
    return render(request, "teacher/teacherhome.html", {'username': request.user.username,'firstName': request.user.first_name})

@login_required
def students(request):
    students_table = Student.objects.filter(teacher = request.user)
    return render(request, "teacher/students.html", {'studentsList': students_table })

@login_required
def studentinformation(request):
    return render(request, "teacher/studentdetail.html")