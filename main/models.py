from django.db import models
from django.contrib.auth.models import User

'''Teacher model - holds all info for a teacher user'''
class Teacher(models.Model):
    user = models.OneToOneField(User)
    def __str__(self):
        return "{0}, {1}".format(self.user.lastname,self.user.firstname)

'''Student Model - holds additional information for a student user'''
class Student(models.Model):
    user = models.OneToOneField(User)
    current_level = models.IntegerField()
    teacher = models.ForeignKey(Teacher)
    def __str__(self):
        return"{0}".format(self.user.username)

'''Holds the scores for a student'''
class Score(models.Model):
    level = models.IntegerField()
    student = models.ForeignKey(Student)
    score = models.IntegerField()
    def __str__(self):
        return "{0}   level: {1}   score: {2}".format(self.student.user.username,self.level,self.score)

'''Holds the problems given by a teacher for student use'''
class Problem(models.Model):
    problem = models.CharField(max_length = 10)
    answer = models.IntegerField()
    type = models.CharField(max_length = 10)
    level = models.IntegerField()
    def __str__(self):
        return "{0}".format(self.problem)
