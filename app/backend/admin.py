from django.contrib import admin
from .models import Community, User, CommunityUserRole

admin.site.register(Community)
admin.site.register(User)
admin.site.register(CommunityUserRole)