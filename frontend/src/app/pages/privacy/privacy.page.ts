import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, AlertController, ToastController} from '@ionic/angular'
import {HeaderImpostazioniPage} from "../../component/header-impostazioni/header-impostazioni.page";

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.page.html',
    styleUrls: ['./privacy.page.scss'],
    standalone: true,
    imports: [IonicModule, FormsModule, CommonModule, HeaderImpostazioniPage]
})

export class PrivacyPage implements OnInit {
    password: string = '';
    showPassword: boolean = false;
    ricordami: boolean = false;

    constructor(
        private alertController: AlertController,
        private toastController: ToastController,
    ) {
    }

    ngOnInit() {
        this.caricaPassword();
    }

    ionViewWillEnter() {
        this.caricaPassword();
    }

    caricaPassword() {
        const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');
        if (utenteLoggato) {
            this.password = utenteLoggato.password;
        } else {
            this.password = '';
        }
    }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    async cambiaPassword() {
        const alert = await this.alertController.create({
            header: 'Cambia Password',
            message: 'Inserisci la nuova password:',
            inputs: [
                {
                    name: 'nuovaPassword',
                    type: 'password',
                    placeholder: 'Nuova password'
                }
            ],
            buttons: [
                {
                    text: 'Annulla',
                    role: 'cancel',
                    cssClass: 'secondary'
                },
                {
                    text: 'Conferma',
                    handler: (data) => {
                        this.aggiornaPassword(data.nuovaPassword);
                    }
                }
            ]
        });

        await alert.present();
    }

    aggiornaPassword(nuovaPassword: string) {
        if (!nuovaPassword) return;

        const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');
        if (utenteLoggato) {
            // Aggiorna la password dell'utente loggato
            utenteLoggato.password = nuovaPassword;
            localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

            let utenti = JSON.parse(localStorage.getItem('utenti') || '[]');
            utenti = utenti.map((u: any) =>
                u.email.toLowerCase() === utenteLoggato.email.toLowerCase()
                    ? {...u, password: nuovaPassword}
                    : u
            );
            localStorage.setItem('utenti', JSON.stringify(utenti));

            this.password = nuovaPassword;
            this.mostraToastSuccesso();
        }
    }

    async mostraToastSuccesso() {
        const toast = await this.toastController.create({
            message: '✅ Password aggiornata con successo!',
            duration: 2000,
            position: 'bottom',
            color: 'success',
            icon: 'checkmark-circle-outline'
        });
        toast.present();
    }

    toggleRicordami() {
        const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || sessionStorage.getItem('utenteLoggato') || 'null');
        if (!utenteLoggato) return;

        if (this.ricordami) {
            localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));
            sessionStorage.removeItem('utenteLoggato');
        } else {
            sessionStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));
            localStorage.removeItem('utenteLoggato');
        }
    }


}
