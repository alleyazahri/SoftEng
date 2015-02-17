from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SoftEng.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'main.views.home', name = 'main_home')
)

urlpatterns += patterns (
    'django.contrib.auth.views', #package that invokes all files
                       
    url(r'^login/$', 'login', {'template_name': 'login.html'}, name = 'main_login'),
                       
    url(r'^logout/$', 'logout', {'next_page': 'main_home'}, name = 'main_logout'),
)