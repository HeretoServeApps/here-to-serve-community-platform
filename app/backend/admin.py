from django.contrib import admin
from .models import Community, User, CommunityUserRole, CustomSection, Activity, RideActivity, MealActivity, EventActivity, Announcement, DiscussionPost, Resource

admin.site.register(Community)
admin.site.register(User)
admin.site.register(CommunityUserRole)
admin.site.register(CustomSection)
admin.site.register(Resource)
admin.site.register(DiscussionPost)
admin.site.register(Announcement)
admin.site.register(Activity)
admin.site.register(RideActivity)
admin.site.register(MealActivity)
admin.site.register(EventActivity)


