import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {IonContent, IonIcon} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-breathing-modal',
    templateUrl: './breathing-modal.component.html',
    styleUrls: ['./breathing-modal.component.scss'],
    imports: [
        IonIcon,
        IonContent,
        NgIf
    ],
    standalone: true
})
export class BreathingModalComponent implements OnInit {


    @Input() duration: number = 60;
    timeLeft: number = 60;
    intervalId: any;
    paused = false;

    constructor(private modalCtrl: ModalController, private router: Router, private alertCtrl: AlertController, private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.timeLeft = this.duration;
        this.startTimer();
    }

    resetTimer() {
        this.timeLeft = this.duration;
    }

    togglePause() {
        this.paused = !this.paused;
    }

    formatTime(): string {
        const min = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
        const sec = (this.timeLeft % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    }

    async goBack() {
        const alert = await this.alertCtrl.create({
            header: 'Abbandonare l’esercizio?',
            message: 'Sei sicuro di voler uscire? Il timer si fermerà.',
            buttons: [
                {
                    text: 'Annulla',
                    role: 'cancel'
                },
                {
                    text: 'Sì, esci',
                    handler: () => {
                        clearInterval(this.intervalId);
                        this.modalCtrl.dismiss();
                    }
                }
            ]
        });

        await alert.present();
    }

    async endExercise() {
        clearInterval(this.intervalId);

        const alert = await this.alertCtrl.create({
            header: 'Complimenti!',
            message: 'Hai completato l’esercizio con successo',
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        this.modalCtrl.dismiss();
                    }
                }
            ]
        });

        await alert.present();
    }

    startTimer() {
        this.intervalId = setInterval(() => {
            if (!this.paused && this.timeLeft > 0) {
                this.timeLeft--;

                if (this.timeLeft === 0) {
                    clearInterval(this.intervalId);
                    this.cdRef.detectChanges();
                }
            }
        }, 1000);
    }

}
