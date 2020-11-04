"""
Django settings for app project.

Generated by 'django-admin startproject' using Django 3.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
from decouple import config
from app.app.settings import *

DEBUG = True
TEMPLATE_DEBUG = DEBUG

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'here-to-serve',
        'USER': 'posgres',
        'PASSWORD': config('POSTGRESQL_DATABASE_PASSWORD'),
        'HOST': 'localhost',
        'PORT': ''
    }
}


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/
ALLOWED_HOSTS = ['127.0.0.1:8000', 'localhost']