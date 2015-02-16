from django.db import models

# Create your models here.
#level_choices = (
#    ('1', '1st level'),
#    ('2', '2nd level'),
#    ('3', '3rd level'),
#    ('4', '4th level'),
#    ('5', '5th level'),
#    ('6', '6th level'),
#    ('7', '7th level')
#)
#
#type_choices = (
#    ('M', 'Mixed'),
#    ('A', 'Addition'),
#    ('S', 'Subtraction'),
#    ('P', 'Placement')
#)
    
class Teacher(models.Model):
    teacher_username = models.CharField(max_length = 15)
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 20)
    password = models.CharField(max_length = 20)

class Student(models.Model):
    student_username = models.CharField(max_length = 15)
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 20)
    password = models.CharField(max_length = 20)
    current_level = models.IntegerField()
    teacher = models.ForeignKey(Teacher)

class Score(models.Model):
#    level = models.models.CharField(max_length = 1, default = '1', choices = level_choices)
    student = models.ForeignKey(Student)
    score = models.IntegerField()

class Problem(models.Model):
    problem = models.CharField(max_length = 10)
    answer = models.IntegerField()
#    type = models.CharField(max_length = 1, default = 'M', choices = type_choices)
    level = models.IntegerField()