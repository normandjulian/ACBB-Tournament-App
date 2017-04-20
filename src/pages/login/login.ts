import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {HomePage} from "../home/home";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    public user: any = null;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public fb: FormBuilder,
                public authenticationService: AuthenticationService) {
    }

    authentication(value: any, isValid: boolean) {
        if (isValid) {
            this.authenticationService.authentication(value).subscribe(
                (res) => {
                    localStorage.setItem('token', res.token);
                    this.navCtrl.push(HomePage)
                },
                (err) => console.log(err)
            );
        }
    }

    ngOnInit() {
        // Initialise the form
        this.user = this.fb.group({
            login: ['', [<any>Validators.required]],
            password: ['', [<any>Validators.required]]
        });

        this.authentication({
            login: 'julian',
            password: 'julian'
        }, true)
    }
}
