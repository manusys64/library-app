import { Component } from '@angular/core';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
    selector: 'app-book-add-form',
    templateUrl: '../book-form/book-form.component.html',
    styleUrls: ['../book-form/book-form.component.scss']
})
export class BookAddFormComponent extends BookFormComponent {
    save() {
        this.saved = true;
        this.backendService.post('books/', this.formGroup.value)
            .subscribe(
                _ => {
                    this.toastrService.success('Book saved successfuly')
                    this.router.navigateByUrl('');
                    this.dialog.closeAll()
                },
                response => {
                    this.handleErrors(response.error)
                    this.saved = false;
                }
            )
    }
}