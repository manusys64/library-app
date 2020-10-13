import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
    ngOnInit(): void {
        console.log("Init in component")
    }

}
