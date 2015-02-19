from django.shortcuts import render

# Create your views here.

def teacherhome(request)
    return render(request, "teacher/teacherhome.html")

def students(request)
    return render(request, "teacher/students.html")

def studentinformation(request)
    return render(request, "teacher/studentdetail")