import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {APP_CONFIG, IAppConfig} from '../app/app.config';

import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import {User} from "../classes/user.class";

@Injectable()
export class AuthenticationService {

    constructor(public http: Http,
                @Inject(APP_CONFIG) private config: IAppConfig) {
    };

    set_header(headers: Headers) {
        headers.append('x-access-token', AuthenticationService.get_token());
    }

    authentication(user: any): Observable<any> {
        return this.http.post(`${this.config.apiEndpoint}authentication`, user)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    static get_token(): string {
        return localStorage.getItem('token');
    }
}
