import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { BooksModule } from './modules/books/books.module';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './services/backend.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BooksModule,
        HttpClientModule,
        CommonModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        BackendService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
