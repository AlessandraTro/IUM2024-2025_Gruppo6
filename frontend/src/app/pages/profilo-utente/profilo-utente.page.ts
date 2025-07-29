import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {
    IonAvatar,
    IonButton,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {FooterComponent} from "../../component/footer/footer.component";

@Component({
    selector: 'app-profilo-utente',
    templateUrl: './profilo-utente.page.html',
    styleUrls: ['./profilo-utente.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, IonButton, IonItem, IonLabel, IonList, IonIcon, IonAvatar, FooterComponent]
})
export class ProfiloUtentePage implements OnInit {
    user: any = {
        name: '',
        photo: 'assets/profilo.png'
    };

    constructor(private router: Router, private alertController: AlertController) {
    }

    ngOnInit() {
        this.loadUser();
    }

    ionViewWillEnter() {
        this.loadUser();
    }

    goToModificaProfilo() {
        this.router.navigate(['/modifica-profilo']);
    }

    goToNotifiche() {
        this.router.navigate(['/modifica-notifiche']);
    }

    goToLingua() {
        this.router.navigate(['/modifica-lingua']);
    }

    goToPrivacy() {
        this.router.navigate(['/privacy']);
    }

    goToProgressi() {
        this.router.navigate(['/progressi']);
    }

    goToFaq() {
        this.router.navigate(['/faq']);
    }


    logout() {
        localStorage.removeItem('utenteLoggato');

        this.router.navigateByUrl('/home');
    }

    loadUser() {
        const utenteJson =
            localStorage.getItem('utenteLoggato') ||
            sessionStorage.getItem('utenteLoggato');

        if (utenteJson) {
            const utente = JSON.parse(utenteJson);

            this.user = {
                name: utente.name || utente.nome || '',
                photo: utente.photo || 'assets/profilo.png'
            };

        }
    }

    async deleteAccount() {
        const alert = await this.alertController.create({
            header: 'Conferma eliminazione',
            message: 'Sei sicuro di voler eliminare il tuo account? Questa azione non può essere annullata.',
            buttons: [
                {
                    text: 'Annulla',
                    role: 'cancel',
                    cssClass: 'secondary'
                },
                {
                    text: 'Elimina',
                    role: 'destructive',
                    handler: () => {
                        const utenteLoggato = JSON.parse(
                            localStorage.getItem('utenteLoggato') || sessionStorage.getItem('utenteLoggato') || 'null'
                        );

                        if (!utenteLoggato) return;

                        const utentiJson = localStorage.getItem('utenti');
                        let utenti = utentiJson ? JSON.parse(utentiJson) : [];

                        utenti = utenti.filter((u: any) => u.email !== utenteLoggato.email);
                        localStorage.setItem('utenti', JSON.stringify(utenti));

                        localStorage.removeItem('utenteLoggato');
                        sessionStorage.removeItem('utenteLoggato');

                        this.router.navigateByUrl('/home');
                    }
                }
            ]
        });

        await alert.present();
    }


}
