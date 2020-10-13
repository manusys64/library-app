import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksListComponent } from './components/books-list/books-list.component';


@NgModule(
    {
        declarations: [
            BooksListComponent
        ],
        imports: [
            CommonModule
        ],
        entryComponents: []
    }
)
export class BooksModule { }
