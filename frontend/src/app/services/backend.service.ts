import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(
        private httpClient: HttpClient
    ) { }

    get(url: string, params: object): any {
        return this.httpClient.get(
            this.createUrl(url),
            {
                responseType: 'json',
                params: new HttpParams()
            }
        )
    }

    post(url: string, params: object): any {
        return this.httpClient.post(
            this.createUrl(url),
            params
        )
    }

    createUrl(url: string) {
        return environment.url + url
    }
}