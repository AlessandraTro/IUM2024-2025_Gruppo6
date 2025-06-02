import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {UtenteService} from "../../Service/utente.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput, IonButton, IonText]
})
export class LoginPage {
  email = '';
  password = '';
  errore = '';

  constructor(private utenteService: UtenteService, private router: Router) {}

  login() {
    this.utenteService.login(this.email, this.password).subscribe(utenti => {
      const utenteTrovato = utenti.find(
          u => u.email === this.email && u.password === this.password
      );

      if (utenteTrovato) {
        console.log('Login riuscito');
        this.router.navigateByUrl('/home-benvenuto');
      } else {
        this.errore = 'Credenziali non valide';
      }
    });
  }
}