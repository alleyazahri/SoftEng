from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import *


# Create your views here.
@login_required
def home(request):
    return render(request,'student/home.html',{'name':request.user.username})

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