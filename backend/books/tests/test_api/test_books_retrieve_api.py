from rest_framework.test import APITestCase
from datetime import date
from books.models.book import Book


class BooksRetrieveApiTest(APITestCase):
    def setUp(self):
        book_data = {
            'title': 'A',
            'author': 'B',
            'publish_date': date.today(),
            'isbn': '1111111111111',
            'pages_number': '2',
            'cover_link': 'C',
            'language': 'D',
        }
        self.book = Book.objects.create(**book_data)
        book_data['isbn'] = '2222222222'
        Book.objects.create(**book_data)

    def test_list(self):
        response = self.client.get('/books/')
        self.assertEqual(200, response.status_code)
        self.assertEqual(2, response.data['count'])

    def test_retrieve(self):
        response = self.client.get(f'/books/{self.book.id}/')
        self.assertEqual(200, response.status_code)
        self.assertEqual(self.book.id, response.data['id'])
