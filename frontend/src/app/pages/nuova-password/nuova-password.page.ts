import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import {
    IonContent,
    IonIcon,
} from '@ionic/angular/standalone';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-nuova-password',
    templateUrl: './nuova-password.page.html',
    styleUrls: ['./nuova-password.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, IonIcon]
})
export class NuovaPasswordPage implements OnInit {

    email: string = '';
    password1: string = '';
    password2: string = '';
    showPassword1: boolean = false;
    showPassword2: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private alertController: AlertController
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.email = params['email'];
        });
    }

    togglePassword(n: number) {
        if (n === 1) this.showPassword1 = !this.showPassword1;
        else this.showPassword2 = !this.showPassword2;
    }

    goBack() {
        this.location.back();
    }

    async showAlert(title: string, message: string) {
        const alert = await this.alertController.create({
            header: title,
            message: message,
            cssClass: 'custom-alert',
            buttons: [
                {
                    text: 'OK',
                    role: 'confirm',
                    cssClass: 'alert-button-ok',
                }
            ]
        });

        await alert.present();
    }

    async resetPassword() {
        if (this.password1 !== this.password2) {
            await this.showAlert('Errore', 'Le password non corrispondono');
            return;
        }

        let utenti = JSON.parse(localStorage.getItem('utenti') || '[]');
        const index = utenti.findIndex((u: any) => u.email.toLowerCase() === this.email.toLowerCase());

        if (index !== -1) {
            utenti[index].password = this.password1;
            localStorage.setItem('utenti', JSON.stringify(utenti));
            await this.showAlert('Successo', 'Password aggiornata con successo!');
            this.router.navigate(['/login']);
        } else {
            this.showAlert('Errore', 'Utente non trovato');
        }
    }



}
