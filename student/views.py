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

ScoreLimit = 60

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
            if seven < ScoreLimit:
                lvl = 6.5
        except ObjectDoesNotExist:
            lvl = 6.5
            pass
    return render(request,'student/home.html',{'name':request.user.username,'level': lvl})


@login_required
def profile(request):

    username = request.user.username
    count = Student.objects.count()
    for i in range(count):
        temp = Student.objects.get(id=i+1)
        if username == temp.user.username:
            student = temp
            level = temp.current_level
    oneScore = " - "
    twoScore = " - "
    threeScore = " - "
    fourScore = " - "
    fiveScore = " - "
    sixScore = " - "
    sevenScore = " - "
    if level >= 1:
        try:
            oneScore = Score.objects.get(student = student, level = 1).score
        except ObjectDoesNotExist:
            oneScore = " - "
            pass
    if level >= 2:
        try:
            twoScore = Score.objects.get(student = student, level = 2).score
        except ObjectDoesNotExist:
            twoScore = " - "
            pass
    if level >= 3:
        try:
            threeScore = Score.objects.get(student = student, level = 3).score
        except ObjectDoesNotExist:
            threeScore = " - "
            pass
    if level >= 4:
        try:
            fourScore = Score.objects.get(student = student, level = 4).score
        except ObjectDoesNotExist:
            fourScore = " - "
            pass
    if level >= 5:
        try:
            fiveScore = Score.objects.get(student = student, level = 5).score
        except ObjectDoesNotExist:
            fiveScore = " - "
            pass
    if level >= 6:
        try:
            sixScore = Score.objects.get(student = student, level = 6).score
        except ObjectDoesNotExist:
            sixScore = " - "
            pass
    if level >= 7:
        try:
            sevenScore = Score.objects.get(student = student, level = 7).score
        except ObjectDoesNotExist:
            sevenScore = " - "
            pass

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
    student = get_object_or_404(Student, user =request.user)
    lvl = student.current_level

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

    # Check the form. If the game just started, pass empty form. Otherwise, save the form
    if request.method == 'POST':
        if "edit" in request.POST:
            form = ScoreForm(request.POST)
            if form.is_valid():
                # Save the form if score at that level did not exist or if new score is bigger than previous one
                try:
                    CurrentScore = Score.objects.all().get(student = student, level = 1) # Get the score at that level. If it did not exist, go tp exception
                    if CurrentScore.score < int(form.data['score']): # Compare previous score to new one.
                        CurrentScore.delete() # If new is bigger, delete previous score and save new one.
                        form.save()
                except ObjectDoesNotExist: # If the score at that level did not exist, just save the form
                    form.save()
                    pass

                # Update the level if score is larger than limit.
                CurrentScore = Score.objects.all().get(student = student, level = 1)
                if lvl==1:
                    if CurrentScore.score>=ScoreLimit:
                        student.current_level = 2
                        student.save()
                return redirect('student.views.home') # Goes after saving
            else:
                return redirect('student.views.profile')
        else:
            return redirect('student.views.home')
    else:
        form = ScoreForm()
    return render(request,'student/game1.html', {'answerSet' : answers, 'problemSet' : problems, 'form':form, 'stud':student})


@login_required    
def game2(request):
    # Get student
    student = get_object_or_404(Student, user =request.user)
    lvl = student.current_level

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

    if request.method == 'POST':
        if "edit" in request.POST:
            form = ScoreForm(request.POST)
            if form.is_valid():
                # Do stuff with the previous form if existed and save new form
                try:
                    CurrentScore = Score.objects.all().get(student = student, level = 2)
                    if CurrentScore.score < int(form.data['score']):
                        CurrentScore.delete()
                        form.save()
                except ObjectDoesNotExist:
                    form.save()
                    pass

                CurrentScore = Score.objects.all().get(student = student, level = 2)
                if lvl==2:
                    if CurrentScore.score>=ScoreLimit:
                        student.current_level = 3
                        student.save()
                return redirect('student.views.home')
            else:
                return redirect('student.views.profile')
        else:
            return redirect('student.views.home')
    else:
        form = ScoreForm()
    return render(request,'student/game2.html',{'answerSet' : answers, 'problemSet' : problems, 'form':form, 'stud':student})



@login_required
def game3(request):
    
    # Make random problems:
    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = []
    answers = []
    count = 0
    terminate = 0 #debugging number, insures no infinite loop. DELETE WHEN PROBLEMS ARE IN DATABASE
    while count<20 and terminate < 1000:
        terminate += 1
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and rand.level == 3:
            if rand.answer not in answers:
                problems.append(rand.problem)
                answers.append(rand.answer)
                count = count + 1

    return render(request,'student/game3.html', {'answerSet' : answers, 'problemSet' : problems});            
   

@login_required    
def game4(request):
    # Get student
    student = get_object_or_404(Student, user =request.user)
    lvl = student.current_level

    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = []
    answers = []
    count = 0

    while count<30:
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and rand.level == 4:
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
                    CurrentScore = Score.objects.all().get(student = student, level = 4)
                    if CurrentScore.score < int(form.data['score']):
                        CurrentScore.delete()
                        form.save()
                except ObjectDoesNotExist:
                    form.save()
                    pass

                CurrentScore = Score.objects.all().get(student = student, level = 4)
                if lvl==4:
                    if CurrentScore.score>=ScoreLimit:
                        student.current_level = 5
                        student.save()
                return redirect('student.views.home')
            else:
                return redirect('student.views.profile')
        else:
            return redirect('student.views.home')
    else:
        form = ScoreForm()
    return render(request,'student/game4.html',{'answerSet' : answers, 'problemSet' : problems, 'form':form, 'stud':student})

@login_required
def game5(request):
    # Get student
    student = get_object_or_404(Student, user =request.user)
    lvl = student.current_level

    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = []
    answers = []
    count = 0

    while count<30:
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and (rand.level == 1 or rand.level == 2):
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
                    CurrentScore = Score.objects.all().get(student = student, level = 5)
                    if CurrentScore.score < int(form.data['score']):
                        CurrentScore.delete()
                        form.save()
                except ObjectDoesNotExist:
                    form.save()
                    pass

                CurrentScore = Score.objects.all().get(student = student, level = 5)
                if lvl==5:
                    if CurrentScore.score>=ScoreLimit:
                        student.current_level = 6
                        student.save()
                return redirect('student.views.home')
            else:
                return redirect('student.views.profile')
        else:
            return redirect('student.views.home')
    else:
        form = ScoreForm()
    return render(request,'student/game5.html',{'answerSet' : answers, 'problemSet' : problems, 'form':form, 'stud':student})

@login_required    
def game6(request):
    # Get student
    student = get_object_or_404(Student, user =request.user)
    lvl = student.current_level

    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = []
    answers = []
    count = 0

    while count<30:
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and (rand.level == 5 or rand.level == 4):
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
                    CurrentScore = Score.objects.all().get(student = student, level = 6)
                    if CurrentScore.score < int(form.data['score']):
                        CurrentScore.delete()
                        form.save()
                except ObjectDoesNotExist:
                    form.save()
                    pass

                CurrentScore = Score.objects.all().get(student = student, level = 6)
                if lvl==6:
                    if CurrentScore.score>=ScoreLimit:
                        student.current_level = 7
                        student.save()
                return redirect('student.views.home')
            else:
                return redirect('student.views.profile')
        else:
            return redirect('student.views.home')
    else:
        form = ScoreForm()
    return render(request,'student/game6.html',{'answerSet' : answers, 'problemSet' : problems, 'form':form, 'stud':student})

@login_required
def game7(request):
    # Get student
    student = get_object_or_404(Student, user =request.user)
    lvl = student.current_level

    total = Problem.objects.aggregate(Max('pk'))
    total = total.get('pk__max')
    problems = []
    answers = []
    count = 0

    while count<40:
        rand = random.randint(1,total)
        try:
            rand = Problem.objects.get(pk=rand)
        except ObjectDoesNotExist:
            pass
        if type(rand) is not int and (rand.level == 6 or rand.level == 5 or rand.level == 4 or rand.level == 7):
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
                    CurrentScore = Score.objects.all().get(student = student, level = 7)
                    if CurrentScore.score < int(form.data['score']):
                        CurrentScore.delete()
                        form.save()
                except ObjectDoesNotExist:
                    form.save()
                    pass
                return redirect('student.views.home')
            else:
                return redirect('student.views.profile')
        else:
            return redirect('student.views.home')
    else:
        form = ScoreForm()
    return render(request,'student/game7.html',{'answerSet' : answers, 'problemSet' : problems, 'form':form, 'stud':student})


def colorGame(request):
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
        if type(rand) is not int and rand.level == 3:
            if rand.answer not in answers:

                problems.append(rand.problem)
                answers.append(rand.answer)
                count = count + 1
    return render(request,'student/coloringGame.html', {'answerSet' : answers, 'problemSet' : problems})

@login_required
def studentedit(request):
    user = get_object_or_404(User, pk = request.user.pk)
    stud = get_object_or_404(Student, user = user)
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
