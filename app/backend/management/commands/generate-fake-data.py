from faker import Faker

from django.core.management.base import BaseCommand, CommandError
from backend.models import User, Community, CommunityUserRole

class Command(BaseCommand):
    help = 'Create <N> new Communities with (L+C+M) new Users: <L> Leaders, <C> Coordinators, and <M> Members per Community. Ex: generate-fake-data 4 1 2 5'

    def add_arguments(self, parser):
        parser.add_argument('N', type=int)
        parser.add_argument('L', type=int)
        parser.add_argument('C', type=int)
        parser.add_argument('M', type=int)

    def handle(self, *args, **options):
        fake = Faker()
        N = options['N']
        L = options['L']
        C = options['C']
        M = options['M']

        for _ in range(1, N+1):
            community = Community(
                name=fake.first_name() + ' ' + fake.last_name(),
                description=fake.text()[0:128],
                country='US',
                zipcode=fake.zipcode()
            )
            community.save()

            user_ids = []
            for i in range(1, L+C+M+1):
                email = fake.email()
                User.objects.create_user(
                    email=email,
                    first_name=fake.first_name(),
                    last_name=fake.last_name(),
                    address_line_1=fake.street_address(),
                    address_line_2='apt 1',
                    city=fake.city(),
                    state=fake.state(),
                    country='US',
                    zipcode=fake.postcode(),
                    phone_number_1=fake.phone_number(),
                    phone_number_1_type='cell',
                    phone_number_2=fake.phone_number(),
                    phone_number_2_type='cell',
                    how_learn='Social Media',
                    who_help=community.name,
                    how_help='As an individual volunteer',
                    how_know='Friend',
                    skills_to_offer='No Selection',
                    password='password',
                )

                user = User.objects.get(email=email)
                user_ids.append(user.id)

            comm_member_roles = []
            for i in range(0, L+C+M):
                if(i<L):
                    role = 'COMM_LEADER'
                elif(i<L+C):
                    role='COORDINATOR'
                else:
                    role='COMM_MEMBER'

                comm_member_roles.append(CommunityUserRole(
                    community=community,
                    user=User.objects.get(id=user_ids[i]),
                    role=role  
                    ))
            
            for user in User.objects.all():
                if user.is_staff:
                    comm_member_roles.append(CommunityUserRole(
                        community=community,
                        user=user,
                        role="ADMIN"
                    ))
                    self.stdout.write(self.style.SUCCESS(f'Added user {user.first_name} as admin to {community.name}\'s community'))

            CommunityUserRole.objects.bulk_create(comm_member_roles)
