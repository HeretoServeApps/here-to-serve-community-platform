from django.core.management.base import BaseCommand, CommandError
from backend.models import Community
class Command(BaseCommand):
    help = 'Creates fake data'

    def handle(self, *args, **options):

         self.stdout.write(self.style.SUCCESS('Successfully created fake data'))

