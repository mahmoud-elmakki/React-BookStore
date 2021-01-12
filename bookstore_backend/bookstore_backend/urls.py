"""bookstore_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    # admin
    path('admin/', admin.site.urls),

    # local apps
    path('api/v1/', include('books.urls')),

    # log in/out in the browsable API
    path('api-auth/', include('rest_framework.urls')),

    # log in/out (user mng) ebdpoints
    path('api/v1/rest-auth/', include('rest_auth.urls')),
    
    # registeration ebdpoint
    path('api/v1/rest-auth/registration/', include('rest_auth.registration.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

