from typesBox.models import InterestsBox
from typesBox.serializers import InterestsBoxSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, generics
from .permissions import IsOwnerOrReadOnly


class InterestsBoxList(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    pagination_class = (NotImplemented, )
    queryset = InterestsBox.objects.all()
    serializer_class = InterestsBoxSerializer
