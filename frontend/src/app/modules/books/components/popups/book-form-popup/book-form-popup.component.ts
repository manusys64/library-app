import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/intefaces/book';


@Component({
    selector: 'app-book-form-popup',
    template: ``,
    styleUrls: ['./book-form-popup.component.scss']
})
export abstract class BookFormPopupComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    abstract get postData(): Book
}
