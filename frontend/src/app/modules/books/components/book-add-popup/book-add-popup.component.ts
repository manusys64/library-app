import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/intefaces/book';


@Component({
    selector: 'app-book-add-popup',
    templateUrl: './book-add-popup.component.html',
    styleUrls: ['./book-add-popup.component.scss']
})
export class BookAddPopupComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    get postData(): Book {
        return {
            title: this.data.title,
            author: this.data.title,
            cover_link: this.data.title,
            isbn: this.data.title,
            pages_number: this.data.title,
            publish_date: this.data.title,
        };
    }

}
