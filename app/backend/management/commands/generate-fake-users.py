from faker import Faker

from django.core.management.base import BaseCommand, CommandError
from backend.models import User

class Command(BaseCommand):
    help = 'Generate <N> fake instances of the User model'

    def add_arguments(self, parser):
        parser.add_argument('num_users', type=int)

    def handle(self, *args, **options):
        fake = Faker()
        num_users = options['num_users']

        for i in range(1, num_users+1):
            User.objects.create_user(
                fake.email(),
                fake.first_name(),
                fake.last_name(),
                fake.phone_number(),
                'password', 
            )

            self.stdout.write(self.style.SUCCESS(f'Created user {i} of {num_users}'))