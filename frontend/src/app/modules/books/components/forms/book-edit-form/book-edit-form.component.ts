import { Component } from '@angular/core';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
    selector: 'app-book-edit-form',
    templateUrl: '../book-form/book-form.component.html',
    styleUrls: ['../book-form/book-form.component.scss']
})
export class BookEditFormComponent extends BookFormComponent {
    save() {
        this.saved = true;
        this.backendService.put(`books/${this.initialValues.id}/`, this.formGroup.value)
            .subscribe(
                _ => {
                    this.toastrService.success('Book saved successfuly');
                    window.location.reload();
                    this.dialog.closeAll();
                },
                response => {
                    this.handleErrors(response.error);
                    this.saved = false;
                }
            );
    }
}