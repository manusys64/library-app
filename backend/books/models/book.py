from django.db import models


class Book(models.Model):
    title = models.TextField()
    author = models.TextField()
    publish_date = models.DateField()
    isbn = models.IntegerField()
    pages_number = models.PositiveIntegerField()
    cover_link = models.TextField()
    language = models.TextField()

    def __str__(self):
        return f'{self.title} by {self.author}'
