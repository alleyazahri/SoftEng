from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import *


# Create your views here.
@login_required
def home(request):
    user = request.user.username
    count = Student.objects.count()
    for i in range(count):
        thing = Student.objects.get(id=i+1)
        if user == thing.user.username:
            gameLevel = thing.current_level
    if gameLevel == 1:
        return render(request,'student/home.html',{'name':request.user.username})
    elif gameLevel == 2:
        return render(request,'student/homeL2.html',{'name':request.user.username})
    elif gameLevel == 3:
        return render(request,'student/homeL3.html',{'name':request.user.username})
    elif gameLevel == 4:
        return render(request,'student/homeL4.html',{'name':request.user.username})
    elif gameLevel == 5:
        return render(request,'student/homeL5.html',{'name':request.user.username})
    elif gameLevel == 6:
        return render(request,'student/homeL6.html',{'name':request.user.username})
    else:
        return render(request,'student/homel7.html',{'name':request.user.username})


@login_required
def game1(request):
    return render(request,'student/game1.html')

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