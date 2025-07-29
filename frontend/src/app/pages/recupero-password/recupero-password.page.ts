import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

import {
    IonContent,
    IonIcon,

} from '@ionic/angular/standalone';

@Component({
    selector: 'app-recupero-password',
    templateUrl: './recupero-password.page.html',
    styleUrls: ['./recupero-password.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, IonIcon]
})
export class RecuperoPasswordPage implements OnInit {
    email: string = '';

    constructor(
        private alertController: AlertController,
        private router: Router,
        private location: Location
    ) {
    }

    async sendEmail() {
        const utenti = JSON.parse(localStorage.getItem('utenti') || '[]');
        const utente = utenti.find((u: any) => u.email.toLowerCase() === this.email.toLowerCase());

        const alert = await this.alertController.create({
            header: utente ? 'Email inviata' : 'Email non inviata',
            message: utente
                ? `L'indirizzo ${this.email} è registrato, riceverai un'email di conferma.`
                : `L'indirizzo ${this.email} non risulta registrato.`,
            buttons: [{
                text: 'OK',
                handler: () => {
                    if (utente) {
                        this.router.navigate(['/nuova-password'], {
                            queryParams: {email: this.email}
                        });
                    }
                }
            }]
        });

        await alert.present();
    }

    goBack() {
        this.location.back();
    }

    ngOnInit() {
    }

}
