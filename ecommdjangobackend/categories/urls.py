from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, SubcategoryViewSet

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('subcategories', SubcategoryViewSet)

urlpatterns = router.urls
