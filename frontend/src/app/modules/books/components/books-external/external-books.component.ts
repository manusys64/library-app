import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServerDataSource } from 'ng2-smart-table';
import { BookAddPopupComponent } from '../popups/book-add-popup/book-add-popup.component';
import { externalSettings } from './smart-table-settings';

@Component({
    selector: 'app-external-books',
    templateUrl: './external-books.component.html',
    styleUrls: ['./external-books.component.scss']
})
export class ExternalBooksComponent implements OnInit {
    tableSettings = externalSettings;
    source: ServerDataSource;

    constructor(
        private http: HttpClient,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.source = new ServerDataSource(
            this.http,
            {
                endPoint: 'https://www.googleapis.com/books/v1/volumes',
                dataKey: 'items',
                pagerPageKey: 'startIndex',
                pagerLimitKey: 'maxResults',
                filterFieldKey: 'q'
            }
        );
    }

    borrow(event) {
        this.dialog.open(BookAddPopupComponent, { data: event.data.volumeInfo });
    }
}
