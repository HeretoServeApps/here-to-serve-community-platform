# Generated by Django 3.0.7 on 2020-12-12 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_auto_20201212_0638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='display_leaders_on_home_page',
            field=models.CharField(default='true', max_length=5),
        ),
    ]
