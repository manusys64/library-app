import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ng2SmartTableComponent, ServerDataSource } from 'ng2-smart-table';
import { environment } from 'src/environments/environment';
import { BookDeletePopupComponent } from '../popups/book-delete-popup/book-delete-popup.component';
import { BookEditPopupComponent } from '../popups/book-edit-popup/book-edit-popup.component';
import { internalSettings } from './smart-table-settings';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
    tableSettings = internalSettings;
    source: ServerDataSource;
    actions = {
        custom_edit: BookEditPopupComponent,
        custom_delete: BookDeletePopupComponent
    }

    constructor(
        private http: HttpClient,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.source = new ServerDataSource(
            this.http,
            {
                endPoint: environment.url + 'books/',
                dataKey: 'results',
                pagerPageKey: 'page',
                pagerLimitKey: 'page_size',
                totalKey: 'count',
                sortFieldKey: 'ordering',
                sortDirKey: 'direction',
                filterFieldKey: '#field#__icontains'
            })
    }

    onAction(event) {
        this.dialog.open(this.actions[event.action], { data: event.data });
    }

}
