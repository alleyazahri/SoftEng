from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from main.models import *
from teacher.forms import UsernameForm

# Create your views here.

@login_required
def teacherhome(request):
    return render(request, "teacher/teacherhome.html", {'username': request.user.username,'firstName': request.user.first_name})

@login_required
def teacheredit(request):
    return render(request, "teacher/teacheredit.html")

@login_required
def students(request):
    students_table = Student.objects.all().filter(teacher__user = request.user)
    return render(request, "teacher/students.html", {'studentsList': students_table })

@login_required
def studentinformation(request):
    return render(request, "teacher/studentdetail.html")

def get_username(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
     # create a form instance and populate it with data from the request:
        form = UsernameForm(request.POST)
        # if a GET (or any other method) we'll create a blank form
    else:
        form = UsernameForm()
    return render(request, 'teacher/students.html', {'form': form})

