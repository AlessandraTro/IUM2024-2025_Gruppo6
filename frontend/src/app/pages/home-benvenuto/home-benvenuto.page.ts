import { Component, OnInit } from '@angular/core';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton, IonButtons,
  IonCol,
  IonContent, IonFooter, IonGrid,
  IonHeader, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-benvenuto',
  templateUrl: './home-benvenuto.page.html',
  styleUrls: ['./home-benvenuto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, IonButton, IonCol, IonRow, IonButtons, IonAvatar, IonGrid, RouterLink]
})
export class HomeBenvenutoPage implements OnInit {
  username: string = '';  // Variabile per il nome utente

  constructor() { }

  ngOnInit() {
    // Recupera gli utenti da localStorage
    const utenti = JSON.parse(localStorage.getItem('utenti') || '[]');

    // Recupera il nome dell'utente loggato (qui assumiamo che ci sia solo un utente per ora)
    const utenteLoggato = utenti[0];  // Modifica questo come necessario per più utenti

    if (utenteLoggato) {
      this.username = utenteLoggato.nome;  // Imposta il nome dell'utente
    }
  }
}