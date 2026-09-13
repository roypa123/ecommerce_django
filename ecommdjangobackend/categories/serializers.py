from rest_framework import serializers

from .models import Category, Subcategory

class SubcategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Subcategory
        fields = ['id', 'category', 'name', 'image', 'created_at', 'updated_at']


class CategorySerializer(serializers.ModelSerializer):
    subcategories = SubcategorySerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name','image','subcategories', 'created_at', 'updated_at']