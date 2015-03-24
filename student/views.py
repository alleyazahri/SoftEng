from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from main.models import *
from django.core.exceptions import ObjectDoesNotExist
import random
from django.db.models import Max
from .forms import *
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.contrib.auth import logout
from datetime import datetime

# Create your views here.
@login_required
def home(request):
    stud = get_object_or_404(Student, id = request.user.pk)
    gameLevel = stud.current_level
    return render(request,'student/home.html',{'name':request.user.username,'level':gameLevel})


@login_required
def profile(request):

    username = request.user.username
    email = request.user.email
    count = Student.objects.count()
    for i in range(count):
        temp = Student.objects.get(id=i+1)
        if username == temp.user.username:
            firname = temp.user.first_name
            lasname = temp.user.last_name
            level = temp.current_level
            numid = i+1
    if level > 1:
        oneScore = Score.objects.get(student = numid, level = 1).score
    else:
        oneScore = " - "
    if level > 2:
        twoScore = Score.objects.get(student = numid, level = 2).score
    else:
        twoScore = " - "
    if level > 3:
        threeScore = Score.objects.get(student = numid, level = 3).score
    else:
        threeScore = " - "
    if level > 4:
        fourScore = Score.objects.get(student = numid, level = 4).score
    else:
        fourScore = " - "
    if level > 5:
        fiveScore = Score.objects.get(student = numid, level = 5).score
    else:
        fiveScore = " - "
    if level > 6:
        sixScore = Score.objects.get(student = numid, level = 6).score
        try:
            sevenScore = Score.objects.get(student = numid, level = 7).score
        except ObjectDoesNotExist:
            sevenScore = " - "
            pass
    else:
        sixScore = " - "
        sevenScore = " - "
    return render(request,'student/studentPage.html',{'fname' : firname, 'lname' : lasname, 'username' : username, 'email' : email,
                                                      'gameLevel' : level, 'firstScore' : oneScore, 'secondScore' : twoScore,
                                                      'thirdScore' : threeScore, 'fourthScore' : fourScore,
                                                      'fifthScore' : fiveScore, 'sixthScore' : sixScore,
                                                      'seventhScore' : sevenScore})

@login_required
def changepword(request):
    return render(request, 'student/pword.html')

@login_required
def game1(request):
    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = {}
    count = 0

    while count<2:
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and rand.level == 1:
            if not problems.has_key(rand.answer):
                problems[rand.answer] = rand.problem
                count = count + 1
    return render(request,'student/game1.html',{'val' : rand.problem, 'tot' : problems})

@login_required    
def game2(request):
    return render(request,'student/game2.html')

@login_required
def game3(request):
    return render(request,'student/game3.html')

@login_required    
def game4(request):
    return render(request,'student/game4.html')

@login_required
def game5(request):
    return render(request,'student/game5.html')

@login_required    
def game6(request):
    return render(request,'student/game6.html')

@login_required
def game7(request):
    return render(request,'student/game7.html')

<<<<<<< HEAD
def colorGame(request):
    return render(request,'student/coloringGame.html')
=======

@login_required
def studentedit(request):
    user = get_object_or_404(User, pk = request.user.pk)
    stud = get_object_or_404(Student, id = request.user.pk)
    gameLevel = stud.current_level
    if request.method == 'POST':
        if "edit" in request.POST:
            #EDITING HERE
            form = StudentForm(data = request.POST)
            if form.is_valid():
                if request.POST.get('password'):
                    user.set_password(request.POST.get('password'))
                if request.POST.get('first_name'):
                    user.first_name = request.POST.get('first_name')
                if request.POST.get('last_name'):
                    user.last_name = request.POST.get('last_name')
                if request.POST.get('email'):
                    user.email = request.POST.get('email')
                user.save()
                request.session['LAST_LOGIN_DATE'] = datetime.now()
                logout(request)
                return redirect('student.views.home')
        else:
            return render(request, "student/home.html", {'name':request.user.username,'level':gameLevel})
    else:
        form = StudentForm()
    return render(request, "student/studentEdit.html", {'student': user,  'form': form})
>>>>>>> origin/Dana's_branch
