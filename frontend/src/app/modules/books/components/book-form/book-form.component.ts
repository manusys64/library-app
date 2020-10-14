import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
    formGroup: FormGroup;
    saved = false;
    errors: string[];

    constructor(
        private backendService: BackendService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.formGroup = new FormGroup(
            {
                title: new FormControl('', [Validators.required]),
                author: new FormControl('', [Validators.required]),
                language: new FormControl('', [Validators.required]),
                publish_date: new FormControl('', [Validators.required]),
                pages_number: new FormControl('', [Validators.required]),
                isbn: new FormControl('', [Validators.required]),
                cover_link: new FormControl('', [Validators.required])
            }
        );
    }

    save() {
        this.saved = true;
        this.errors = [];
        this.backendService.post('books/', this.formGroup.value)
            .subscribe(
                _ => {
                    this.router.navigateByUrl('');
                },
                response => {
                    this.handleErrors(response.error)
                    this.saved = false;
                }
            )
    }

    handleErrors(errors: object) {
        for (const [key, value] of Object.entries(errors)) {
            this.errors.push(`${key.toUpperCase()}: ${value}`);
        }
    }

}