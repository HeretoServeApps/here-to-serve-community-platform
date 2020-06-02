from django.urls import include, path, re_path
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from . import views  


# Django REST API views
router = routers.DefaultRouter()
router.register(r'all-users', views.UsersViewSet)
router.register(r'community', views.CommunityViewSet)
router.register(r'community-user-role', views.CommunityUserRoleViewSet)
router.register(r'one-community', views.OneCommunityViewSet)
router.register(r'activity', views.ActivityViewSet, basename='activity')
router.register(r'announcement', views.AnnouncementViewSet)
router.register(r'well-wishes', views.WellWishViewSet)
router.register(r'community-custom-sections', views.CommunityCustomSections)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view()),
    path('communities/', views.CommunityList.as_view()),
    path('community-role-register/', views.CommunityUserRoleRegister.as_view()),
    path('reset-password/', views.ResetPassword.as_view()),
    path('reset-password/confirm/',views.PasswordResetConfirmView.as_view(), name = 'password_reset_confirm'),
    path('add-announcement/', views.AddAnnouncement.as_view()),
    path('community-people/', views.CommunityPeopleList.as_view()),
    re_path(r'^edit-user/(?P<pk>\d+)/$', views.UserViewUpdate.as_view()),
    path('invite-members/', views.InviteUsers.as_view()),
    path(r'community-coordinators/<int:community_id>/', views.CommunityCoordinatorsList.as_view()),
    path('delete-announcement/', views.DeleteAnnouncement.as_view()),
    path('edit-announcement/', views.EditAnnouncement.as_view()),
    path('add-well-wish/', views.AddWellWish.as_view()),
     path('delete-well-wish/', views.DeleteWellWish.as_view()),
    path('edit-well-wish/', views.EditWellWish.as_view()),
     path('edit-ways-to-help/', views.EditWaysToHelp.as_view()),
]
