import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {HomeService} from "./home.service";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [HomeService]
})
export class HomePage {
    public categories: any = [];
    public contests: any = [];
    public games: any = [];
    public category: any = null;
    public contest: any = null;
    public loading = null;
    constructor(public navCtrl: NavController,
                public homeService: HomeService,
              public loadingCtrl: LoadingController) {
    }

    category_change() {
        let loading = this.loadingCtrl.create({ content: 'Doucement mec...' });
        loading.present();
        this.homeService.get_all_contests(this.category._id).subscribe(
            (res) => {
              this.contests = res;
              loading.dismiss();
            }
        )
    }

    contest_change() {
      let loading = this.loadingCtrl.create({ content: 'Oulala ça arrive...' });
      loading.present();
        this.homeService.get_one_contest(this.contest._id).subscribe(
            (res) => {
              this.games = res.games;
              loading.dismiss();
            }
            // res => console.log(res)
        )
    }

    select_game(game: any) {
      console.log(game)
    }

    ionViewDidLoad() {
      let loading = this.loadingCtrl.create({ content: 'Un ptit punch ?' });
      loading.present();
        this.homeService.get_all_categories().subscribe(
            (res) => {
              loading.dismiss();
              this.categories = res
            }
        )
    }
}
