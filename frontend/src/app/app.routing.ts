import { Routes } from "@angular/router";
import { booksRoutes } from './modules/books/books.routes';


export const appRoutes: Routes = [
    { path: '', children: booksRoutes }
]