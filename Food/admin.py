from django.contrib import admin
from .models import Food
from .models import Drink
from .models import Dessert, Wine

# Register your models here.

admin.site.register(Food)
admin.site.register(Drink)
admin.site.register(Dessert)
admin.site.register(Wine)


# register submit order
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'phone', 'items', 'address')
    
    
# register submit-review
from .models import Review

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'rating', 'review', 'created_at')  
    list_filter = ('rating', 'created_at')  
    search_fields = ('name', 'email', 'review')  
    ordering = ('-created_at',)  
admin.site.register(Review, ReviewAdmin)

# register booking
from .models import Booking
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email','phone', 'date', 'time', 'guests')
    list_filter = ('date', 'time', 'phone')
    search_fields = ('name', 'email', 'phone')
    ordering = ('date', 'time')

admin.site.register(Booking, BookingAdmin)

# register contact

from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email','phone', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email','phone', 'message')
    ordering = ('-created_at',)
    
admin.site.register(Contact, ContactAdmin)