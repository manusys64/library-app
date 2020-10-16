import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from 'src/app/services/backend.service';


@Component({
    selector: 'app-book-delete-popup',
    templateUrl: './book-delete-popup.component.html',
})
export class BookDeletePopupComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        protected backendService: BackendService,
        protected dialog: MatDialog,
    ) { }

    delete() {
        this.backendService.delete(`books/${this.data.id}/`, {})
            .subscribe(
                _ => {
                    window.location.reload();
                    this.dialog.closeAll();
                },
            );
    }
}
