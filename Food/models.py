from django.db import models

class Food(models.Model):
    number = models.IntegerField(primary_key=True)
    cusine = models.TextField(max_length=100)
    cusine_detail = models.TextField(max_length=500)
    price= models.FloatField(default=True)

    def __str__(self):
        return f"{self.number}/: {self.cusine} : ${self.price} "
    
# create Drink Category 
class Drink(models.Model):
    number = models.IntegerField(primary_key=True)
    drink = models.TextField(max_length=100)
    drink_detail = models.TextField(max_length=500)
    price = models.FloatField(default=True)
    
    class Size(models.TextChoices): 
        SMALL = "S", "Small"
        MEDIUM = "M", "Medium"
        LARGE = "L", "Large"
        
    drink_size = models.CharField(
        max_length=3,
        choices=Size.choices,  
        default=Size.MEDIUM,
        
    )
    
    def __str__(self):
        return f"{self.number} : {self.drink} : ${self.price}"

# create dessert category

class Dessert(models.Model):
    No =  models.IntegerField(primary_key = True)
    dessert = models.TextField(max_length=100)
    dessert_detail = models.TextField(max_length=500)
    price = models.FloatField(default=True)
    
    def __str__(self):
        return f"{self.No}/: {self.dessert}: ${self.price}"
        
# wine category      
class Wine(models.Model): 
    name = models.TextField(max_length=100)
    detail = models.TextField(max_length=500)
    price = models.FloatField(default=True)
    
    def __str__(self):
        return f"{self.name} : ${self.price}"


# order database
class Order(models.Model):
    name = models.CharField(max_length=100)  # Customer's name
    email = models.EmailField()  # Customer's email
    phone = models.CharField(max_length=15)  # Customer's phone number
    items = models.TextField()  # Details of the order items
    address = models.TextField()  # Delivery address
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp of order creation

    def __str__(self):
        return f"Order by {self.name} - {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}"
    
    
# Review Database 
class Review(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    review = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.rating}/5)"
    
    
# Book restaurant table

class Booking(models.Model): 
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=15)
    date = models.DateField()
    time = models.TimeField(auto_now_add=True)
    guests = models.IntegerField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.date} : {self.time} : {self.guests}"
    

# Contact database

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.phone} - {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}"