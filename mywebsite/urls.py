from django.contrib import admin
from django.conf.urls import url, include

from . import views

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^$', views.index),
]
