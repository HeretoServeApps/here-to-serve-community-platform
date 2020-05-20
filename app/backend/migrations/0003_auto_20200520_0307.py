# Generated by Django 3.0.4 on 2020-05-20 03:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20200520_0307'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='all_day',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='activity',
            name='end_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='activity',
            name='start_time',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]