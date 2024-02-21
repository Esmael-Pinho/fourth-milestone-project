from django.urls import path
from . import views
from .views import apply_promo_code_view

urlpatterns = [
    path('', views.view_bag, name='view_bag'),
    path('apply-promo-code/', apply_promo_code_view, name='apply_promo_code'),
]