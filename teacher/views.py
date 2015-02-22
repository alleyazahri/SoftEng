from django.shortcuts import render

# Create your views here.

def teacherhome(request):
    #myself = Teacher.objects.filter(teacher_username = )
    return render(request, "teacher/teacherhome.html", {'teacherName': 'name'})

def students(request):
    #students_table = Student.objects(request.user)
    #students_for_this_teacher =students_table
    return render(request, "teacher/students.html")

def studentinformation(request):
    return render(request, "teacher/studentdetail")