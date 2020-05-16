from django.urls import include, path
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from .views import current_user, UserList, CommunityList, UsersViewSet, CommunityViewSet, CommunityUserRoleRegister, CommunityUserRoleViewSet, OneCommunityViewSet, ActivityViewSet

# Django REST API views
router = routers.DefaultRouter()
router.register(r'all-users', UsersViewSet)
router.register(r'community', CommunityViewSet)
router.register(r'community-user-role', CommunityUserRoleViewSet)
router.register(r'one-community', OneCommunityViewSet)
router.register(r'activity', ActivityViewSet, basename='activity')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('communities/', CommunityList.as_view()),
    path('community-role-register/', CommunityUserRoleRegister.as_view()),
]
