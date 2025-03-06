# Generated by Django 5.1.3 on 2025-01-03 02:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Food', '0006_wine'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=15)),
                ('items', models.TextField()),
                ('address', models.TextField()),
                ('submitted_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
