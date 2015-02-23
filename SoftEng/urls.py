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

    #Teacher Stuff
    url(r'^teacher/profile$','teacher.views.teacheredit'),
    url(r'^teacher$','teacher.views.teacherhome'),
    url(r'^teacher/students$','teacher.views.students'),
    url(r'^teacher/studentinformation$','teacher.views.studentinformation'),
)

'''Login Stuff'''
urlpatterns += patterns (
    'django.contrib.auth.views', #package that invokes all files
                       
    url(r'^login/$', 'login', {'template_name': 'login.html'}, name = 'main_login'),
                       
    url(r'^logout/$', 'logout', {'next_page': 'main_home'}, name = 'main_logout'),

)
