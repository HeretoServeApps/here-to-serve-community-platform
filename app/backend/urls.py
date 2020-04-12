from django.urls import include, path
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from . import views
from .views import current_user, UserList

router = routers.DefaultRouter()
router.register(r'community', views.CommunityViewSet)
router.register(r'all-users', views.UsersViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]
