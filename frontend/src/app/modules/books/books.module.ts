import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './components/books-list/books-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BookFormComponent } from './components/book-form/book-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookAddPopupComponent } from './components/book-add-popup/book-add-popup.component';
import { ExternalBooksComponent } from './components/books-external/external-books.component';

@NgModule(
    {
        declarations: [
            BooksListComponent,
            BookFormComponent,
            ExternalBooksComponent,
            BookAddPopupComponent,
            BookAddComponent,
            BookAddPopupComponent
        ],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            Ng2SmartTableModule,
            MatDialogModule,
            MatFormFieldModule
        ],
        entryComponents: []
    }
)
export class BooksModule { }
