import { Component } from '@angular/core';
import { Book } from 'src/app/intefaces/book';
import { BookFormPopupComponent } from '../book-form-popup/book-form-popup.component';


@Component({
    selector: 'app-book-edit-popup',
    templateUrl: './book-edit-popup.component.html',
    styleUrls: ['../book-form-popup/book-form-popup.component.scss']
})
export class BookEditPopupComponent extends BookFormPopupComponent {
    get postData(): Book {
        return this.data;
    }
}
