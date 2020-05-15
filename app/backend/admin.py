from django.contrib import admin
from .models import Community, User, CommunityUserRole, CustomSection, Announcement

admin.site.register(Community)
admin.site.register(User)
admin.site.register(CommunityUserRole)
admin.site.register(CustomSection)
admin.site.register(Announcement)

