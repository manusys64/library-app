import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `
        <div class="pos-f-t" style="margin-bottom: 30px;">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                <h4><a class="navbar-brand" href="">Library App</a></h4>
                <p><a href="">Browse</a></p>
                <p><a href="/form">Add</a></p>
                <p><a href="/borrow">Borrow</a></p>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
