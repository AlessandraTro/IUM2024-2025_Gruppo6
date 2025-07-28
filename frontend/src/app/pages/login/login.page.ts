import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

import {
    IonButton,
    IonContent, IonIcon,
    IonInput,
    IonItem, IonLabel, IonText,
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {UtenteService} from "../../Service/utente.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, IonItem, IonInput, IonButton, IonLabel, IonText, RouterLink, IonIcon]
})
export class LoginPage {
    email = '';
    password = '';
    errore = '';
    showPassword = false;

    constructor(private utenteService: UtenteService, private router: Router) {
        this.utenteService.initializeUtenti();
    }

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    login() {
        // Stampa tutti gli utenti salvati nel localStorage
        const utentiRegistrati = JSON.parse(localStorage.getItem('utenti') || '[]');
        console.log('Tutti gli utenti registrati:', utentiRegistrati);

        this.utenteService.login(this.email, this.password).subscribe(utente => {
            if (utente) {
                console.log('Login riuscito:', utente);
                localStorage.setItem('utenteLoggato', JSON.stringify(utente));
                this.router.navigateByUrl('/home-benvenuto');
            } else {
                this.errore = 'Credenziali non valide';
            }
        });
    }
}