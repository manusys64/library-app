import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="margin-bottom: 30px;">
            <a class="navbar-brand" href="">Library App</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="">Browse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/form">Add</a>
                    </li>
                </ul>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
