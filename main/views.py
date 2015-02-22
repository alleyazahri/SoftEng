#from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import *
from django.shortcuts import redirect
#from student import veiws as v

@login_required
def home(request):
    user = request.user.username
    isTeacher = False
    
    count = Teacher.objects.count()
    for i in range(count):
        thing = Teacher.objects.get(id=i+1)
        if user == thing.user.username:
            isTeacher=True
    if isTeacher:
        return redirect('teacher.views.teacherhome')
    elif request.user.is_staff:
        return redirect('/admin')
    else:
        return redirect('student.views.home')