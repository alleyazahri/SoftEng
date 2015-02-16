from django.contrib import admin
from .models import Teacher, Student, Score, Problem

admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Score)
admin.site.register(Problem)