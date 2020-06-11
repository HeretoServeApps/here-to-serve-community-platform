# Generated by Django 3.0.4 on 2020-06-05 01:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import tinymce.models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('address_line_1', models.CharField(blank=True, default='', max_length=150)),
                ('address_line_2', models.CharField(blank=True, default='', max_length=150)),
                ('city', models.CharField(blank=True, default='', max_length=30)),
                ('state', models.CharField(blank=True, default='', max_length=30)),
                ('zipcode', models.CharField(blank=True, default='', max_length=10)),
                ('country', models.CharField(blank=True, default='US', max_length=128)),
                ('phone_number_1', models.CharField(blank=True, default='', max_length=30)),
                ('phone_number_1_type', models.CharField(blank=True, default='', max_length=30)),
                ('phone_number_2', models.CharField(blank=True, default='', max_length=30)),
                ('phone_number_2_type', models.CharField(blank=True, default='', max_length=30)),
                ('how_learn', models.TextField(blank=True, default='')),
                ('who_help', models.CharField(blank=True, default='', max_length=256)),
                ('how_help', models.CharField(choices=[('As an individual volunteer', 'As an individual volunteer'), ('Through my house of worship', 'Through my house of worship'), ('Through a volunteer organization that I am a member of', 'Through a volunteer organization that I am a member of')], default='As an individual volunteer', max_length=128)),
                ('how_know', models.CharField(choices=[('Family', 'Family'), ('Friend', 'Friend'), ('Friend of a friend', 'Friend of a friend'), ('Coworker', 'Coworker'), ('Attend the same school', 'Attend the same school'), ('Neighbor', 'Neighbor'), ('Social Media', 'Social Media'), ('Worship together', 'Worship together'), ('Do not personally know', 'Do not personally know')], default='Friend', max_length=128)),
                ('skills_to_offer', models.CharField(choices=[('No Selection', 'No Selection'), ('Cared for someone with a life-threatening health crisis', 'Cared for someone with a life-threatening health crisis'), ('I have had a life-threatening health crisis', 'I have had a life-threatening health crisis'), ('Healthcare provider', 'Healthcare provider'), ('Computer, technology, and social media', 'Computer, technology, and social media'), ('Accounting, financial services', 'Accounting, financial services'), ('Provide licensed child care', 'Provide licensed child care'), ('Legal, attorney', 'Legal, attorney'), ('Counseling', 'Counseling'), ('Skilled in complex health insurance issues', 'Skilled in complex health insurance issues'), ('Other', 'Other')], default='No Selection', max_length=128)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity_type', models.CharField(choices=[('Giving Rides', 'Giving Rides'), ('Preparing Meals', 'Preparing Meals'), ('Shopping', 'Shopping'), ('Childcare', 'Childcare'), ('Visits', 'Visits'), ('Coverage', 'Coverage'), ('Miscellaneous', 'Miscellaneous'), ('Occasion', 'Occasion')], default='Occasion', max_length=20)),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True, default='')),
                ('start_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('end_time', models.DateTimeField(blank=True, null=True)),
                ('all_day', models.BooleanField(default=False)),
                ('event_batch', models.UUIDField(default=uuid.uuid4)),
                ('est_hours', models.IntegerField(blank=True, null=True)),
                ('est_minutes', models.IntegerField(blank=True, null=True)),
                ('num_volunteers_needed', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Community',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=128)),
                ('is_closed', models.CharField(default='false', max_length=5)),
                ('description', models.CharField(default='', max_length=256)),
                ('zipcode', models.CharField(default='', max_length=10)),
                ('country', models.CharField(default='US', max_length=128)),
                ('ways_to_help', tinymce.models.HTMLField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='EventActivity',
            fields=[
                ('activity', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='backend.Activity')),
                ('location', models.CharField(blank=True, default='', max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='MealActivity',
            fields=[
                ('activity', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='backend.Activity')),
                ('delivery_location', models.CharField(blank=True, default='', max_length=150)),
                ('dietary_restrictions', models.CharField(blank=True, default='None', max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='RideActivity',
            fields=[
                ('activity', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='backend.Activity')),
                ('pickup_location', models.CharField(blank=True, default='', max_length=150)),
                ('destination_location', models.CharField(blank=True, default='', max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='WellWish',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(blank=True, max_length=50)),
                ('subject', models.CharField(max_length=100)),
                ('message', tinymce.models.HTMLField()),
                ('date_time', models.CharField(max_length=100)),
                ('community', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Community')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CustomSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('type', models.CharField(choices=[('GALLERY', 'Gallery'), ('RESOURCES', 'Resources'), ('DP', 'Discussions and Pages'), ('GENERAL', 'General'), ('BUTTON', 'Button')], default='GENERAL', max_length=128)),
                ('link', models.URLField(blank=True)),
                ('title', models.CharField(blank=True, max_length=64)),
                ('description', models.CharField(blank=True, max_length=128)),
                ('community', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Community')),
            ],
        ),
        migrations.CreateModel(
            name='CommunityUserRole',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(choices=[('ADMIN', 'Administrator'), ('COMM_LEADER', 'Community Leader'), ('COORDINATOR', 'Coordinator'), ('COMM_MEMBER', 'Community Member')], default='COMM_MEMBER', max_length=11)),
                ('community', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Community')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(blank=True, max_length=50)),
                ('subject', models.CharField(max_length=100)),
                ('message', tinymce.models.HTMLField()),
                ('date_time', models.CharField(max_length=100)),
                ('show_on_page', models.CharField(choices=[('true', 'true'), ('false', 'false')], default='true', max_length=5)),
                ('community', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Community')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='activity',
            name='community',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Community'),
        ),
        migrations.AddField(
            model_name='activity',
            name='coordinators',
            field=models.ManyToManyField(related_name='coordinators', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='activity',
            name='volunteers',
            field=models.ManyToManyField(related_name='volunteers', to=settings.AUTH_USER_MODEL),
        ),
    ]
