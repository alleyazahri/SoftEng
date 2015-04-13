from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from main.models import *
from django.core.exceptions import ObjectDoesNotExist
import random
from django.db.models import Max
from .forms import *
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.contrib.auth import *

# Create your views here.
@login_required
def home(request):
    username = request.user.username
    count = Student.objects.count()
    for i in range(count):
        try:
            temp = Student.objects.get(id=i+1)
            if username == temp.user.username:
                lvl = temp.current_level
                numid = i+1
        except ObjectDoesNotExist:
            pass
    if lvl>6:
        try:
            seven = Score.objects.get(student = numid, level = 7).score
        except ObjectDoesNotExist:
            lvl = 6.5
            pass
    return render(request,'student/home.html',{'name':request.user.username,'level': lvl})


@login_required
def profile(request):

    username = request.user.username
    count = Student.objects.count()
    student = get_object_or_404(Student, pk =request.user.id)
    for i in range(count):
        temp = Student.objects.get(id=i+1)
        if username == temp.user.username:
            student = temp
            level = temp.current_level
            numid = i+1
    if level >= 1:
        try:
            oneScore = Score.objects.get(student = student, level = 1).score
        except ObjectDoesNotExist:
            oneScore = " - "
            pass
    else:
        oneScore = " - "
    if level > 2:
        twoScore = Score.objects.get(student = student, level = 2).score
    else:
        twoScore = " - "
    if level > 3:
        threeScore = Score.objects.get(student = student, level = 3).score
    else:
        threeScore = " - "
    if level > 4:
        fourScore = Score.objects.get(student = student, level = 4).score
    else:
        fourScore = " - "
    if level > 5:
        fiveScore = Score.objects.get(student = student, level = 5).score
    else:
        fiveScore = " - "
    if level > 6:
        sixScore = Score.objects.get(student = student, level = 6).score
        try:
            sevenScore = Score.objects.get(student = student, level = 7).score
        except ObjectDoesNotExist:
            sevenScore = " - "
            pass
    else:
        sixScore = " - "
        sevenScore = " - "
    return render(request,'student/studentPage.html',{'fname' : request.user.first_name, 'lname' : request.user.last_name,
                                                      'username' : request.user.username, 'email' : request.user.email,
                                                      'gameLevel' : level, 'firstScore' : oneScore, 'secondScore' : twoScore,
                                                      'thirdScore' : threeScore, 'fourthScore' : fourScore,
                                                      'fifthScore' : fiveScore, 'sixthScore' : sixScore,
                                                      'seventhScore' : sevenScore})

@login_required
def changepword(request):
    return render(request, 'student/pword.html')

@login_required
def game1(request):
    # Get student
    count = Student.objects.count()
    student = get_object_or_404(Student, pk =request.user.id)
    lvl = 1
    for i in range(count):
        try:
            temp = Student.objects.get(id=i+1)
            if request.user.username == temp.user.username:
                lvl = temp.current_level
                student = temp
        except ObjectDoesNotExist:
            pass
    # Make random problems:
    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = []
    answers = []
    count = 0
    while count<20:
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and rand.level == 1:
            if rand.answer not in answers:
                problems.append(rand.problem)
                answers.append(rand.answer)
                count = count + 1

    if request.method == 'POST':
        if "edit" in request.POST:
            form = ScoreForm(request.POST)
            if form.is_valid():
                # Do stuff with the previous form if existed and save new form
                try:
                    CurrentScore = Score.objects.all().get(student = student, level = 1)
                    if CurrentScore.score < int(form.data['score']):
                        CurrentScore.delete()
                        form.save()
                except ObjectDoesNotExist:
                    form.save()
                    pass

                CurrentScore = Score.objects.all().get(student = student, level = 1)
                if lvl==1:
                    if CurrentScore.score>=60:
                        student.current_level = 2
                        student.save()
                return redirect('student.views.home')
            else:
                return redirect('student.views.profile')
        else:
            return redirect('student.views.home')
    else:
        form = ScoreForm()
    return render(request,'student/game1.html', {'answerSet' : answers, 'problemSet' : problems, 'form':form, 'stud':student})


@login_required    
def game2(request):
    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = []
    answers = []
    count = 0

    while count<20:
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and rand.level == 2:
            if rand.answer not in answers:

                problems.append(rand.problem)
                answers.append(rand.answer)
                count = count + 1
    return render(request,'student/game2.html',{'answerSet' : answers, 'problemSet' : problems})

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

def colorGame(request):
    return render(request,'student/coloringGame.html')

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
                update_session_auth_hash(request, user)
            return redirect('student.views.home')
        else:
            return render(request, "student/home.html", {'name':request.user.username,'level':gameLevel})
    else:
        form = StudentForm()
    return render(request, "student/studentEdit.html", {'student': user,  'form': form})
