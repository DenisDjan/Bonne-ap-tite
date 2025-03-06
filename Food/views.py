from django.shortcuts import render
from .models import Food, Drink, Dessert, Wine
from django.http import HttpResponse


def index(request):
    return render(
        request=request,
        template_name="Food/index.html",
    )

def menu(request):
    foods = Food.objects.all()  # Fetch all Food objects
    return render(
        request=request,
        template_name="Food/menu.html",
        context={"foods": foods},
    )
    
def drink(request): 
    drinks = Drink.objects.all()
    return render(
        request=request,
        template_name="Food/drink.html",
        context={"drinks": drinks}
    )
    

def dessert(request):
    desserts = Dessert.objects.all()
    return render (
        request=request,
        template_name="Food/dessert.html",
        context={"desserts" : desserts},
    )


def about(request):
    return render(request, 'Food/about.html')


def wine(request): 
    wines = Wine.objects.all()
    
    return render(
        request = request,
        template_name= "Food/wine.html",
        context = {"wines": wines},
    )
    
    
 # Pass data to the template
 #order menu
from django.shortcuts import render, redirect

def order(request):
    return render(
        request = request,
        template_name="Food/order.html",
        )


from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Order

def submit_order(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        items = request.POST.get('items')
        address = request.POST.get('address')

        Order.objects.create(
            name=name,
            email=email,
            phone=phone,
            items=items,
            address=address
        )

        return redirect('thank_you')
    return redirect('order')
    
# display template thanks you
def thank_you(request):
    return render(
        request = request,
        template_name="Food/thank_you.html",
    )

## create submit review to database
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Review

def review(request):
    reviews = Review.objects.all()
    return render(
        request = request,
        template_name = "Food/review.html",
        context = {"reviews": reviews},
    )

# display submit review
def submit_review(request):
    if request.method == 'POST':

        name = request.POST.get('name')
        email = request.POST.get('email')
        rating = request.POST.get('rating')
        review_text = request.POST.get('review')

        Review.objects.create(
            name=name,
            email=email,
            rating=rating,
            review=review_text
        )

        return redirect('thank_review')

    return render(request, 'submit_review.html')

def thank_review(request):
    return render (
        request = request,
        template_name = "Food/thank_review.html",
    )



# display booking table
from .models import Booking
from django.http import HttpResponse

def booking(request): 
    return render(
        request = request,
        template_name = "Food/booking.html",
    )
    



def book_table(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        date = request.POST.get('date')
        time = request.POST.get('time')
        guests = request.POST.get('guests')

        # Save to database (if a model is defined)
        Booking.objects.create(
            name=name,
            email=email,
            phone=phone,
            date=date,
            time=time,
            guests=guests
        )

        return redirect('thank_booking')

    return render(request, 'booking.html')


def thank_booking(request):
    return render(
        request = request,
        template_name = "Food/thank_booking.html",
    )
    
    
# display contact html
from .models import Contact

def contact(request):
    return render(
        request = request,
        template_name = "Food/contact.html",
    )
    
def submit_contact(request):
    if request.method == 'POST':
        
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')

        Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )

        return redirect('thank_contact')
    return redirect('contact')

def thank_contact(request):
    return render(
        request = request,
        template_name = "Food/thank_contact.html",
    )