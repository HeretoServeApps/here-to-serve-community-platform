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
                name=f"{fake.first_name()}'s Fake Community",
                description=fake.text()[0:128],
                country='US'
            )
            community.save()

            user_ids = []
            for i in range(1, L+C+M+1):
                user = User(
                    first_name=fake.first_name(),
                    last_name=fake.last_name(),
                    phone_number=fake.phone_number(),
                    email=fake.email()
                    )
                user.set_password("password");
                user.save()
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
            CommunityUserRole.objects.bulk_create(comm_member_roles)
