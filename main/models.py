from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Teacher(models.Model):
    #first_name = models.CharField(max_length = 15)
    #last_name = models.CharField(max_length = 20)
    #password = models.CharField(max_length = 20)
    user = models.OneToOneField(User)
    
    def __str__(self):
        return "{0}".format(self.user.username)

class Student(models.Model):
    #first_name = models.CharField(max_length = 15)
    #last_name = models.CharField(max_length = 20)
    #password = models.CharField(max_length = 20)
    current_level = models.IntegerField()
    teacher = models.ForeignKey(Teacher)
    user = models.OneToOneField(User)

    def __str__(self):
        return "{0}".format(self.user.username)

class Score(models.Model):
    level = models.IntegerField()
    student = models.ForeignKey(Student)
    score = models.IntegerField()

    def __str__(self):
        return "Student {0}, level {1}".format(self.student.student_username, self.level)

class Problem(models.Model):
    problem = models.CharField(max_length = 10)
    answer = models.IntegerField()
    type = models.CharField(max_length = 10)
    level = models.IntegerField()

    def __str__(self):
        return "{0}".format(self.problem)