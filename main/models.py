from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Teacher(models.Model):
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 20)
    password = models.CharField(max_length = 20)

class Student(models.Model):
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 20)
    password = models.CharField(max_length = 20)
    current_level = models.IntegerField()
    teacher = models.ForeignKey(Teacher)

class Score(models.Model):
    level = models.IntegerField()
    student = models.ForeignKey(Student)
    score = models.IntegerField()

class Problem(models.Model):
    problem = models.CharField(max_length = 10)
    answer = models.IntegerField()
    type = models.CharField(max_length = 10)
    level = models.IntegerField()