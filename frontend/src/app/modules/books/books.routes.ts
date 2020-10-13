import { Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';


export const booksRoutes: Routes = [
    {
        path: '',
        component: BooksListComponent
    }
]