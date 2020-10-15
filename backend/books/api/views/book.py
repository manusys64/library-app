from rest_framework import viewsets, filters
from rest_framework.decorators import action
from books.models import Book
from books.api.serializers import BookSerializer
from url_filter.integrations.drf import DjangoFilterBackend


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['title', 'author', 'language']
