from django.urls import path
from Food import views



urlpatterns = [
    path("", view=views.index, name="index"),
    path('menu/', view=views.menu, name='menu'),
    path("menu/order/", view= views.order, name= 'order'),
    path('menu/order/submit_order/', view=views.submit_order, name= 'submit order'),
    path('drink/', view= views.drink, name='drink' ),
    path('dessert/', view= views.dessert, name='dessert'),
    path('about/', view= views.about, name= "about"),
    path('wine/', view=views.wine, name = 'wine'),
    path('submit-order/', views.submit_order, name='submit_order'),
    path('submit-order/thank-you/', view=views.thank_you, name='thank_you'),
    path('review/', view=views.review, name='review'),
    path('submit_review/', views.submit_review, name='submit_review'),
    path('thank_review/', views.thank_review, name='thank_review'),
    path('booking/', view=views.booking, name='Booking'),
    path('booking/book-table/', views.book_table, name='book_table'),
    path('booking/book-table/Thank_booking/', views.thank_booking, name='thank_booking'),
    path('contact/', view=views.contact, name='contact'),
    path('contact/submit_contact/', views.submit_contact, name='submit_contact'),
    path('contact/thank_contact/', views.thank_contact, name='thank_contact'),

]