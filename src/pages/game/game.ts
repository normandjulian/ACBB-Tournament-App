import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GameService} from "./game.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'page-game',
    templateUrl: 'game.html',
    providers: [GameService]
})
export class GamePage {
    public game: any;
    public game_form: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public gameService: GameService,
                public fb: FormBuilder) {
    }

    ionViewDidLoad() {
        // Initialise the form
        this.game_form = this.fb.group({
            firstScore: ['', [<any>Validators.required]],
            secondScore: ['', [<any>Validators.required]]
        });

        let _id = this.navParams.get('_id');
        this.gameService.get_one_game(_id).subscribe(
            (res) => {
                this.game = res;

                this.game_form.patchValue({
                    firstScore: this.game.firstScore,
                    secondScore: this.game.secondScore,
                });
            }
        )
    }

}
