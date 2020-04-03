from django.core.management.base import BaseCommand, CommandError
from backend.models import Community
from faker import Faker
from random import choice
import random
class Command(BaseCommand):
    help = 'Creates n fake communities'

    def add_arguments(self, parser):
        parser.add_argument('num_communities', type=int)

    def handle(self, *args, **options):
        fake = Faker()
        num_users = options['num_communities']

        for i in range(num_users):
            fake_name = fake.company()

            fake_purpose = random.choice(['Caregiving' 'Eldercare & Long Term care',
                                          'Military & Veterans Families', 'Volunteering', 'Parenting',
                                          'Schools', 'Religious Groups'])
            fake_is_closed = random.choice([True, False])
            fake_description = fake.sentence()
            fake_country = fake.country()
            fake_zipcode = fake.zipcode()

            c = Community(
                name=fake_name,
                purpose=fake_purpose,
                is_closed=fake_is_closed,
                description=fake_description,
                country=fake_country,
                zipcode=fake_zipcode)
            c.save()
        self.stdout.write(self.style.SUCCESS('Successfully created fake communities'))

