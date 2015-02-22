from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import *

# Create your views here.
@login_required
def teacherhome(request):
    #myself = Teacher.objects.filter(teacher_username = )
    return render(request, "teacher/teacherhome.html", {'teacherName': request.user.username})

@login_required
def students(request):
    #students_table = Student.objects(request.user)
    #students_for_this_teacher =students_table
    return render(request, "teacher/students.html")

@login_required
def studentinformation(request):
    return render(request, "teacher/studentdetail")