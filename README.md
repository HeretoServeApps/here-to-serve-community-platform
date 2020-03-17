# Here to Serve

![](images/logo-h2s.svg)

## Setting up

In terminal/command line:

```
$ git clone https://github.com/dzungpng/here-to-serve
$ cd here-to-serve
```

##### Initialize a virtual environment

Windows:
```
$ python3 -m venv venv
$ venv\Scripts\activate.bat
```

Unix/MacOS:
```
$ python3 -m venv venv
$ source venv/bin/activate
```
Learn more in [the documentation](https://docs.python.org/3/library/venv.html#creating-virtual-environments).

Note: if you are using a python before 3.3, it doesn't come with venv. Install [virtualenv](https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv) with pip instead.


#### Installing Requirements

Make sure that you are in the here-to-serve base directory. Another way to check is that
when you type ls into terminal, you should see a file called requirements.txt:

```
$ pip install -r requirements.txt
```

This will install all current requirements for the project.

## Running Project

#### Migrations

If you just started or cloned the project, have added new models or database tables to the project, or modified any model,
run the following commands to add the changes to the project. Make sure you are in 
the same directory as manage.py:

```
$ python manage.py makemigrations
$ python manage.py migrate
```

The reason that there are separate commands to make and apply migrations is because you’ll commit migrations to your version control system and ship them with your app; they not only make your development easier, they’re also usable by other developers and in production.
More info on these commands [here](https://docs.djangoproject.com/en/3.0/ref/django-admin/#django-admin-makemigrations).

#### Running the Project Locally

```
$ python manage.py runserver
```

#### Important Endpoints

* localhost:8000/admin <br />

This endpoint allows you to login as an admin and easily view and update models.
When you have successfully logged in, you should see this view:

![](images/admin-view.png)

* localhost:8000 <br />

This endpoint allows you to view the models as a rest API. 

![](images/rest-view.png)


