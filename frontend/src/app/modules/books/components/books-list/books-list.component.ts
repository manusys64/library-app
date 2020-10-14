import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { environment } from 'src/environments/environment';
import { internalSettings } from './smart-table-settings';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
    tableSettings = internalSettings;
    source: ServerDataSource;

    constructor(
        private http: HttpClient
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
                filterFieldKey: '#field#'
            })
    }
}
