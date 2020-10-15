import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './components/books-list/books-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookAddComponent } from './components/book-add/book-add.component';
import { ExternalBooksComponent } from './components/books-external/external-books.component';
import { BookEditFormComponent } from './components/forms/book-edit-form/book-edit-form.component';
import { BookAddFormComponent } from './components/forms/book-add-form/book-add-form.component';
import { BookAddPopupComponent } from './components/popups/book-add-popup/book-add-popup.component';
import { BookEditPopupComponent } from './components/popups/book-edit-popup/book-edit-popup.component';
import { BookFormComponent } from './components/forms/book-form/book-form.component';
import { BookDeletePopupComponent } from './components/popups/book-delete-popup/book-delete-popup.component';


@NgModule(
    {
        declarations: [
            BooksListComponent,
            ExternalBooksComponent,
            BookFormComponent,
            BookAddFormComponent,
            BookEditFormComponent,
            BookAddComponent,
            BookAddPopupComponent,
            BookEditPopupComponent,
            BookDeletePopupComponent
        ],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            Ng2SmartTableModule,
            MatDialogModule,
            MatFormFieldModule,
        ],
        entryComponents: []
    }
)
export class BooksModule { }
