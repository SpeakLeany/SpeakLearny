from rest_framework import serializers, permissions
from .models import InterestsBox
from .permissions import IsOwnerOrReadOnly


class InterestsBoxSerializer(serializers.Serializer):
    name = serializers.CharField(read_only=True)
