import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/intefaces/book';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
    @Input() initialValues?: Book;

    formGroup: FormGroup;
    saved = false;
    errors: string[];

    constructor(
        protected backendService: BackendService,
        protected toastrService: ToastrService,
        protected dialog: MatDialog,
        protected router: Router
    ) { }

    ngOnInit(): void {
        const values = this.initialValues ? this.initialValues : this.defaultValues
        this.formGroup = new FormGroup(
            {
                title: new FormControl(values.title, [Validators.required]),
                author: new FormControl(values.author, [Validators.required]),
                language: new FormControl(values.language, [Validators.required]),
                publish_date: new FormControl(values.publish_date, [Validators.required]),
                pages_number: new FormControl(values.pages_number, [Validators.required]),
                isbn: new FormControl(values.isbn, [Validators.required]),
                cover_link: new FormControl(values.cover_link, [Validators.required])
            }
        );
    }

    save(): void { }

    handleErrors(errors: object) {
        this.errors = [];
        for (const [key, value] of Object.entries(errors)) {
            this.errors.push(`${key.toUpperCase()}: ${value}`);
        }
    }

    get defaultValues(): Book {
        return {
            title: '',
            author: '',
            language: '',
            cover_link: '',
            isbn: '',
            pages_number: null,
            publish_date: null,
        }
    }
}
