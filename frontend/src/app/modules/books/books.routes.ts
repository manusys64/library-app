import { Routes } from '@angular/router';
import { BookAddComponent } from './components/book-add/book-add.component';
import { ExternalBooksComponent } from './components/books-external/external-books.component';
import { BooksListComponent } from './components/books-list/books-list.component';


export const booksRoutes: Routes = [
    {
        path: '',
        component: BooksListComponent
    },
    {
        path: 'form',
        component: BookAddComponent
    },
    {
        path: 'borrow',
        component: ExternalBooksComponent
    },

]