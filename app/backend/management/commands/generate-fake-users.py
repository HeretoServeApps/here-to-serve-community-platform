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
                email=fake.email(),
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                address_line_1=fake.street_address(),
                address_line_2='apt 1',
                city=fake.city(),
                state=fake.state(),
                zipcode=fake.postcode(),
                country='US',
                phone_number_1=fake.phone_number(),
                phone_number_1_type='cell',
                phone_number_2=fake.phone_number(),
                phone_number_2_type='cell',
                how_learn='Social Media',
                how_help='As an individual volunteer',
                how_know='Friend',
                skills_to_offer='No Selection',
                password='password',
            )

            self.stdout.write(self.style.SUCCESS(f'Created user {i} of {num_users}'))