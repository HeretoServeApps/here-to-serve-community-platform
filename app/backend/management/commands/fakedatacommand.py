from django.core.management.base import BaseCommand, CommandError
from backend.models import Community
from faker import Faker
class Command(BaseCommand):
    help = 'Creates fake data'

    def handle(self, *args, **options):
        fake = Faker()
        community = Community.query.all()
        self.stdout.write(self.style.SUCCESS('Successfully created fake data'))

