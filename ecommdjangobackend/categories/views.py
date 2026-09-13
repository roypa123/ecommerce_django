from rest_framework import viewsets, permissions, parsers

from .models import Category, Subcategory
from .serializers import CategorySerializer,SubcategorySerializer

# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    parser_classes = [parsers.MultiPartParser, parsers.FormParser]


class SubcategoryViewSet(viewsets.ModelViewSet):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    parser_classes=[parsers.MultiPartParser, parsers.FormParser]    