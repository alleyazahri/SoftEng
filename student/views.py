from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import *
from django.core.exceptions import ObjectDoesNotExist
import random
from django.db.models import Max



# Create your views here.
@login_required
def home(request):
    user = request.user.username
    count = Student.objects.count()
    for i in range(count):
        thing = Student.objects.get(id=i+1)
        if user == thing.user.username:
            gameLevel = thing.current_level
            numid = i+1
            if gameLevel > 6:
                try:
                    Score.objects.get(student = numid, level = 7).score
                except ObjectDoesNotExist:
                    gameLevel = 6.5
                    pass
    return render(request,'student/home.html',{'name':request.user.username,'level':gameLevel})


@login_required
def profile(request):
    user = request.user.username
    count = Student.objects.count()
    for i in range(count):
        temp = Student.objects.get(id=i+1)
        if user == temp.user.username:
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
    return render(request,'student/studentPage.html',{'fname' : firname, 'lname' : lasname, 'username' : user, 'gameLevel' : level, 'firstScore' : oneScore, 'secondScore' : twoScore, 'thirdScore' : threeScore, 'fourthScore' : fourScore, 'fifthScore' : fiveScore, 'sixthScore' : sixScore, 'seventhScore' : sevenScore})

@login_required
def changepword(request):
    return render(request, 'student/pword.html')

@login_required
def game1(request):
    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = [];
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
    return render(request,'student/game1.html',{'answerSet' : answers, 'problemSet' : problems})

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