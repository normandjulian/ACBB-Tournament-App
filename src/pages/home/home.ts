import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomeService} from "./home.service";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [HomeService]
})
export class HomePage {
    public categories: any = [];

    constructor(public navCtrl: NavController,
                public homeService: HomeService) {

    }

    ionViewDidLoad() {
        this.homeService.get_all_categories().subscribe(
            (res) => this.categories = res
        )
    }
}
