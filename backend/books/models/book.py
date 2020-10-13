from django.db import models
from django.core.validators import MinLengthValidator


class Book(models.Model):
    title = models.TextField()
    author = models.TextField()
    publish_date = models.DateField()
    isbn = models.TextField(max_length=13, validators=[MinLengthValidator(10)])
    pages_number = models.PositiveIntegerField()
    cover_link = models.TextField()
    language = models.TextField()

    def __str__(self):
        return f'{self.title} by {self.author}'
