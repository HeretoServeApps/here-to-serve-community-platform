# Generated by Django 3.0.7 on 2020-11-28 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20201128_1325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='time',
            field=models.CharField(default='12:00 PM', max_length=8),
        ),
    ]