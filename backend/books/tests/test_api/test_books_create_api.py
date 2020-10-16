from rest_framework.test import APITestCase
from datetime import date
from books.models.book import Book


class BooksCreateApiTest(APITestCase):
    def setUp(self):
        self.data = {
            'title': 'A',
            'author': 'B',
            'publish_date': date.today(),
            'isbn': '1111111111111',
            'pages_number': '2',
            'cover_link': 'C',
            'language': 'D',
        }

    def test_base_create(self):
        response = self.client.post('/books/', self.data)
        self.assertEqual(201, response.status_code)
        self.assertEqual(1, Book.objects.count())

        book = Book.objects.first()
        self.assertEqual('A', book.title)
        self.assertEqual('B', book.author)
        self.assertEqual(date.today(), book.publish_date)
        self.assertEqual('1111111111111', book.isbn)
        self.assertEqual(2, book.pages_number)
        self.assertEqual('C', book.cover_link)
        self.assertEqual('D', book.language)

    def test_10_digits_isbn(self):
        self.data['isbn'] = '2222222222'
        response = self.client.post('/books/', self.data)
        self.assertEqual(201, response.status_code)
        self.assertEqual(1, Book.objects.count())
        book = Book.objects.first()
        self.assertEqual('2222222222', book.isbn)

    def test_wrong_isbn(self):
        self.data['isbn'] = '3'
        response = self.client.post('/books/', self.data)
        self.assertEqual(400, response.status_code)
        self.assertEqual(0, Book.objects.count())
        self.assertEqual('min_length', response.data['isbn'][0].code)

    def test_wrong_date(self):
        self.data['publish_date'] = 'E'
        response = self.client.post('/books/', self.data)
        self.assertEqual(400, response.status_code)
        self.assertEqual(0, Book.objects.count())
        self.assertEqual('invalid', response.data['publish_date'][0].code)

    def test_missing_fields(self):
        """We have 7 required field so there should be 7 errors atm"""
        self.data = {}
        response = self.client.post('/books/', self.data)
        self.assertEqual(400, response.status_code)
        self.assertEqual(0, Book.objects.count())
        self.assertEqual(len(response.data), 7)
