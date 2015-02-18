from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SoftEng.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^student$', 'student.views.home'),
    url(r'^student/game1$', 'student.views.game1'),
    url(r'^student/game2$', 'student.views.game2'),
    url(r'^student/game3$','student.views.game3'),
    url(r'^student/game4$','student.views.game4'),
    url(r'^student/game5$','student.views.game5'),
    url(r'^student/game6$','student.views.game6'),
    url(r'^student/game7$','student.views.game7')
)
