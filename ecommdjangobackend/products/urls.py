from rest_framework.routes import DefaultRouter

from .views import ProductViewSet

router = DefaultRouter()
router.register('products', ProductViewSet)

urlpatterns = router.urls