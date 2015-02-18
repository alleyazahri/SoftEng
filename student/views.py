from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'student/home.html',{'name':'Student'})

def game1(request):
    return render(request,'student/game1.html')
    
def game2(request):
    return render(request,'student/game2.html')

def game3(request):
    return render(request,'student/game3.html')
    
def game4(request):
    return render(request,'student/game4.html')

def game5(request):
    return render(request,'student/game5.html')
    
def game6(request):
    return render(request,'student/game6.html')

def game7(request):
    return render(request,'student/game7.html')