import { Component } from '@angular/core';
import { Book } from 'src/app/intefaces/book';
import { BookFormPopupComponent } from '../book-form-popup/book-form-popup.component';


@Component({
    selector: 'app-book-add-popup',
    templateUrl: './book-add-popup.component.html',
    styleUrls: ['../book-form-popup/book-form-popup.component.scss']
})
export class BookAddPopupComponent extends BookFormPopupComponent {
    get postData(): Book {
        const identifiers = this.data.industryIdentifiers
        const lastIdentifier = identifiers ? identifiers.pop() : { identifier: '' }
        const links = this.data.imageLinks;

        return {
            title: this.data.title,
            author: this.data.authors ? this.data.authors.join(', ') : '',
            language: this.data.language,
            cover_link: links ? links.thumbnail : '',
            isbn: lastIdentifier ? lastIdentifier.identifier : '',
            pages_number: this.data.pageCount,
            publish_date: this.data.publishedDate,
        };
    }

}
