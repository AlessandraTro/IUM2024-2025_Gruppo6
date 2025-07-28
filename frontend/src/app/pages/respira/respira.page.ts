import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {
    NavController
} from '@ionic/angular/standalone';
import {IonicModule, ModalController} from "@ionic/angular";
import {BreathingModalComponent} from "../../component/breathing-modal/breathing-modal.component";

@Component({
    selector: 'app-respira',
    templateUrl: './respira.page.html',
    styleUrls: ['./respira.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonicModule]
})
export class RespiraPage implements OnInit {

    technique = '4-7-8';
    duration = '5';

    constructor(
        private navCtrl: NavController,
        private location: Location,
        private modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
    }

    goBack() {
        this.location.back();
    }

    async startExercise() {
        const durationSeconds = parseInt(this.duration) * 60;
        const modal = await this.modalCtrl.create({
            component: BreathingModalComponent,
            componentProps: {duration: durationSeconds},
            showBackdrop: true,
            backdropDismiss: false,
            cssClass: 'breathing-modal'
        });

        await modal.present();
    }
}
