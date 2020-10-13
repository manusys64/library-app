from django.contrib import admin
from django.urls import path, include
from books.api.urls import urlpatterns as books_patterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls'))
]

urlpatterns += books_patterns
