import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/intefaces/book';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
    book$: Observable<Book>;

    constructor(
        private backendService: BackendService
    ) { }

    ngOnInit(): void {
        this.book$ = this.backendService.get('books/', {});
    }

}
