# Generated by Django 5.1.3 on 2024-12-28 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Food', '0003_drink'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dessert',
            fields=[
                ('No', models.IntegerField(primary_key=True, serialize=False)),
                ('dessert', models.TextField(max_length=100)),
                ('dessert_detail', models.TextField(max_length=500)),
                ('price', models.IntegerField(default=True)),
            ],
        ),
    ]
