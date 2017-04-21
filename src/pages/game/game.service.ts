import {Injectable, Inject} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import {IAppConfig, APP_CONFIG} from "../../app/app.config";
import {AuthenticationService} from "../../services/authentication.service";

@Injectable()
export class GameService {
    constructor(public http: Http,
                public authenticationService: AuthenticationService,
                @Inject(APP_CONFIG) private config: IAppConfig) {
    };

    get_one_game(game_id: string): Observable<any> {
        let headers = new Headers();
        this.authenticationService.set_header(headers);

        return this.http.get(`${this.config.apiEndpoint}games/${game_id}`, {headers: headers})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    update_game(game: any): Observable<any> {
        let headers = new Headers();
        this.authenticationService.set_header(headers);

        return this.http.put(`${this.config.apiEndpoint}games/${game._id}`, game, {headers: headers})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
}
