import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './components/books-list/books-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BookFormComponent } from './components/book-form/book-form.component';


@NgModule(
    {
        declarations: [
            BooksListComponent,
            BookFormComponent
        ],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            Ng2SmartTableModule
        ],
        entryComponents: []
    }
)
export class BooksModule { }
