from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SoftEng.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'main.views.home', name = 'main_home'),

    #Student Stuff
    url(r'^student$', 'student.views.home'),
    url(r'^student/game1$', 'student.views.game1'),
    url(r'^student/game2$', 'student.views.game2'),
    url(r'^student/game3$','student.views.game3'),
    url(r'^student/game4$','student.views.game4'),
    url(r'^student/game5$','student.views.game5'),
    url(r'^student/game6$','student.views.game6'),
    url(r'^student/game7$','student.views.game7'),
    url(r'^student/profile$', 'student.views.profile'),
    url(r'^student/password$','student.views.changepword'),
    url(r'^student/edit$','student.views.studentedit'),

    #Teacher Stuff
    url(r'^teacher/profile$','teacher.views.teacheredit', name = 'teacher_profile'),
    url(r'^teacher$','teacher.views.teacherhome', name = 'teacher_home'),
    url(r'^teacher/students$','teacher.views.students', name = 'teacher_students'),
    url(r'^teacher/studentinformation$','teacher.views.studentinformation'),
    url(r'^teacher/profile$','teacher.views.teacheredit'),
    url(r'^teacher$','teacher.views.teacherhome'),
    url(r'^teacher/students$','teacher.views.students'),
    url(r'^teacher/editstudent/(?P<pk>\d+)/$','teacher.views.edit_student'),
    url(r'^teacher/studentinformation/(?P<pk>\d+)/$','teacher.views.studentinformation'),
    url(r'^teacher/problems','teacher.views.problemsList'),
    url(r'^teacher/newproblem','teacher.views.new_problem'),
    url(r'^teacher/deleteproblem/(?P<pk>\d+)/$','teacher.views.delete_problem'),
    url(r'^teacher/editproblem/(?P<pk>\d+)/$','teacher.views.edit_problem')
)

# '''Login Stuff'''
urlpatterns += patterns (
    'django.contrib.auth.views', #package that invokes all files
                       
    url(r'^login/$', 'login', {'template_name': 'login.html'}, name = 'main_login'),
                       
    url(r'^logout/$', 'logout', {'next_page': 'main_home'}, name = 'main_logout'),

)
