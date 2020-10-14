import { Routes } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BooksListComponent } from './components/books-list/books-list.component';


export const booksRoutes: Routes = [
    {
        path: '',
        component: BooksListComponent
    },
    {
        path: 'form',
        component: BookFormComponent
    }
]