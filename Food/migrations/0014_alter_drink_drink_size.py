# Generated by Django 5.1.3 on 2025-01-07 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Food', '0013_alter_food_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drink',
            name='drink_size',
            field=models.TextField(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large')], default='M', max_length=30),
        ),
    ]
