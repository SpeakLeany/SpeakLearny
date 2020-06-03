from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from typesBox import views

urlpatterns = [
    path('typesBox/', views.InterestsBoxList.as_view()),
]
