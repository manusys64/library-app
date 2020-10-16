from rest_framework.test import APITestCase
from datetime import date
from books.models.book import Book


class BooksFiltersApiTest(APITestCase):
    def setUp(self):
        book_data = {
            'title': 'Hobbit',
            'author': 'B',
            'publish_date': date.today(),
            'isbn': '1111111111111',
            'pages_number': '2',
            'cover_link': 'C',
            'language': 'D',
        }
        self.hobbit_book = Book.objects.create(**book_data)
        book_data['title'] = 'LOTR'
        book_data['isbn'] = '2222222222'
        self.lotr_book = Book.objects.create(**book_data)

    def test_filtering_common_letter(self):
        response = self.client.get('/books/?title__icontains=o')
        self.assertEqual(200, response.status_code)
        self.assertEqual(2, response.data['count'])

    def test_filtering_unique_phrase(self):
        response = self.client.get('/books/?title__icontains=lO')
        self.assertEqual(200, response.status_code)
        self.assertEqual(1, response.data['count'])
        self.assertEqual(self.lotr_book.id, response.data['results'][0]['id'])
