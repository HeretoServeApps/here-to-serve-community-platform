# Here to Serve
![python3.x](https://img.shields.io/badge/python-3.x-brightgreen.svg)
![constributors](https://img.shields.io/github/contributors/dzungpng/here-to-serve)
![languages](https://img.shields.io/github/languages/count/dzungpng/here-to-serve)

![stars](https://img.shields.io/github/stars/dzungpng/here-to-serve?style=social)

![](images/logo-h2s.svg)

## Demos

### Registering as a New User
![register](readme_media/register.gif "register")

### Creating a new Community
![createcommunity](readme_media/create_community.gif "createcommunity")

### Writing a Post
![post](readme_media/post.gif "post")

### Creating a calendar event
![event](readme_media/create_event.gif "event")

## Other Functionalities:
- Customizing homepage
- Permissions
- Password reset
- Email notifications
- Calendar filtering
- Adding custom links to sidebar
- Managing community members
- Managing photo gallery

## Project structure

The backend is under `app` folder, while the frontend is in the `frontend` folder. <br />

Under the `app` folder is the applications of the project are stored. `backend` is our main app, 
where we will add models like `Community` and `Group` to. The other is `authentication`, which is where we 
will be storing our `User` model and login/registration logic. The subfolder `app` inside of the outter `app`
folder stores our main settings (eg. when we add a new app we need to go to app/settings.py).  


## Setting up: Backend

In terminal/command line:

```
$ git clone https://github.com/dzungpng/here-to-serve
$ cd here-to-serve/app
```

##### Initialize a virtual environment

Windows:

```
$ python -m venv venv
$ venv\Scripts\activate.bat
```

Unix/MacOS:

```
$ python -m venv venv
$ source venv/bin/activate
```

Learn more in [the documentation](https://docs.python.org/3/library/venv.html#creating-virtual-environments).

Note: if you are using a python before 3.3, it doesn't come with venv. Install [virtualenv](https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv) with pip instead.

#### Installing Requirements

Make sure that you are in the here-to-serve/app directory. Another way to check is that
when you type ls into terminal, you should see a file called requirements.txt:

```
$ pip install -r requirements.txt
```

This will install all current requirements for the project's backend.

## Setting Up: Frontend
First install ```yarn```. ```yarn``` is a nice package for dependency management. For instructions
on how to install ```yarn```, visit [yarn website](https://classic.yarnpkg.com/en/docs/install).

Then install necessary frontend packages by:

```
$ cd frontend
$ yarn install
```

## Running Project: Backend

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

#### Creating an admin user (if one isn't created already)

```
$ python manage.py createsuperuser
```

Enter in the admin information. 

#### Running the Project Locally

```
$ python manage.py runserver
```

#### Important Endpoints

- localhost:8000/admin <br />

This endpoint allows you to login as an admin and easily view and update models.

- localhost:8000 <br />

You can add communities as an admin directly on this interface. <br />

This endpoint allows you to view the models as a rest API.


## Running Project: Frontend

```
$ cd frontend
$ yarn start
```

And navigate to localhost:3000.


These are test communities we added with the admin view. If you want to test further, 
try going to admin view (localhost:8000/admin) and add some more communities.

Note: You have to have both frontend and backend running to run the entire project. 
If you only have the backend running, you can access the admin and API pages. 

## Test Data
There are management commands you can call to generate fake data to test the app.

To generate fake communities + users + roles, type into terminal (in the same directory as manage.py):

```
$ python3 manage.py generate-fake-data input1 input2 input3 input4
```
For example: 
```
$ python3 manage.py generate-fake-data 4 1 2 5
```
This will create 4 new communities, each with 1 leader, 2 coordinators, and 5 members. 

To generate fake communities:

```
$ python3 manage.py fake-communities 4
```
This will generate 4 new communities.

To generate fake users:

```
$ python3 manage.py generate-fake-users 4
```
This will generate 4 new users.
