from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .forms import *
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.contrib.auth import logout
from django.contrib.auth import *

# Create your views here.

@login_required
def teacherhome(request):
    return render(request, "teacher/teacherhome.html", {'username': request.user.username,'firstName': request.user.first_name})

@login_required
def teacheredit(request):
    us = get_object_or_404(User, pk = request.user.pk)
    if request.method == 'POST':
        if "edit" in request.POST:
            #EDITING HERE
            form = TeacherForm(data = request.POST)
            if form.is_valid():
                us.set_password(request.POST.get('password'))
                if request.POST.get('first_name'):
                    us.first_name = request.POST.get('first_name')
                if request.POST.get('last_name'):
                    us.last_name = request.POST.get('last_name')
                if request.POST.get('email'):
                    us.email = request.POST.get('email')
                us.save()
                update_session_auth_hash(request, us)
            return redirect('teacher.views.teacherhome')
                # return render(request, "teacher/teacherhome.html", {'form':form, 'firstName': request.user.first_name})
        else:
            return render(request, "teacher/teacherhome.html")
    else:
        form = TeacherForm()
    return render(request, "teacher/teacheredit.html", {'teach': us,  'form': form})




@login_required
def students(request):
    students_table = Student.objects.all().filter(teacher__user = request.user)
    return render(request, "teacher/students.html", {'studentsList': students_table })

@login_required
def studentinformation(request, pk):
    stud = get_object_or_404(User, pk = pk)
    levelsList = Score.objects.all().filter(student__user = stud)
    return render(request, "teacher/studentdetail.html", {'stud': stud, 'levelsList': levelsList})

@login_required
def edit_student(request, pk):
    us = get_object_or_404(User, pk = pk)
    students_table = Student.objects.all().filter(teacher__user = request.user)
    if request.method == 'POST':
        if "edit" in request.POST:
            #EDITING HERE
            form = UserForm(data = request.POST)
            if form.is_valid():
                # stud.delete()
                us.set_password(request.POST.get('password'))
                if request.POST.get('first_name'):
                    us.first_name = request.POST.get('first_name')
                if request.POST.get('last_name'):
                    us.last_name = request.POST.get('last_name')
                if request.POST.get('email'):
                    us.email = request.POST.get('email')
                us.save()
            return redirect('teacher.views.teacherhome')
        else:
            return render(request, "teacher/students.html", {'studentsList': students_table })
    else:
        form = UserForm()
    return render(request, "teacher/editstudent.html", {'stud': us,  'form': form})


@login_required
def problemsList(request):
    problems_table = Problem.objects.all()
    return render(request, "teacher/problemsList.html", {'problemslist': problems_table })

@login_required
def new_problem(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
    # create a form instance and populate it with data from the request:
        form = ProblemForm(data = request.POST)
        if form.is_valid():
            form.save()
            problems_table = Problem.objects.all()
            return render(request, "teacher/problemsList.html", {'problemslist': problems_table })
            # if a GET (or any other method) we'll create a blank form
    else:
        form = ProblemForm()
    return render(request, "teacher/newproblem.html", {'form': form})

@login_required
def delete_problem(request, pk):
    prob = get_object_or_404(Problem, pk = pk)
    problems_table = Problem.objects.all()
    if request.method == 'POST':
        if "accept" in request.POST:
            prob.delete()
            return render(request, "teacher/problemsList.html", {'problemslist': problems_table })
        else:
            return render(request, "teacher/problemsList.html", {'problemslist': problems_table })
    else:
        return render(request, "teacher/deleteproblem.html", {'prob': prob })

@login_required
def edit_problem(request, pk):
    prob = get_object_or_404(Problem, pk = pk)
    problems_table = Problem.objects.all()
    if request.method == 'POST':
        if "edit" in request.POST:
            #EDITING HERE
            form = ProblemForm(data = request.POST)
            if form.is_valid():
                prob.delete()
                form.save()
                logout(request)
                return redirect('teacher.views.teacherhome')
        else:
            return render(request, "teacher/problemsList.html", {'problemslist': problems_table })
    else:
        form = ProblemForm()
    return render(request, "teacher/editproblem.html", {'prob': prob,  'form': form})