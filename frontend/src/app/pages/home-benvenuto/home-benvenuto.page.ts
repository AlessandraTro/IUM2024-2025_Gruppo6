import { Component, OnInit } from '@angular/core';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCol,
  IonContent, IonGrid,
  IonHeader, IonRow,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../component/footer/footer.component";

@Component({
  selector: 'app-home-benvenuto',
  templateUrl: './home-benvenuto.page.html',
  styleUrls: ['./home-benvenuto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonCol, IonRow, IonGrid, RouterLink, FooterComponent]
})
export class HomeBenvenutoPage implements OnInit {
  username: string = '';  // Variabile per il nome utente

  constructor() { }

  ngOnInit() {
    // Recupera gli utenti da localStorage
    const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');


    if (utenteLoggato) {
      // Imposta il nome dell'utente
      this.username = utenteLoggato.nome.split(' ')[0];  // prende solo il primo nome
    }
  }

  selectedEmotion: string | null = null;
  selectedEmotionImage: string | null = null;
  motivationalPhrase: string | null = null;

  emotionData: any = {
    "Calma": {
      phrase: "Ritrova la tua serenità interiore.",
      image: "assets/img/calma.png"
    },
    "Felicita": {
      phrase: "La felicità è contagiosa: sorridi!",
      image: "assets/img/felice.svg"
    },
    "Focus": {
      phrase: "La concentrazione è la chiave del successo.",
      image: "assets/img/focus.png"
    },
    "Ansioso": {
      phrase: "Respira. Anche questo passerà.",
      image: "assets/img/ansia.png"
    },
    "Tristezza": {
      phrase: "È ok essere tristi. Concediti tempo.",
      image: "assets/img/tristezza.svg"
    },
    "Paura": {
      phrase: "Non lasciare che la paura ti impedisca di raggiungere i tuoi obiettivi.",
      image: "assets/img/paura.png"
    },
    "Rabbia": {
      phrase: "La rabbia è energia: trasformala in azione positiva.",
      image: "assets/img/rabbia.svg"
    },
    "Altro": {
      phrase: " ",
      image: "assets/img/altro.svg"
    }
  };


  showCustomModal: boolean = false;
  customEmotionText: string = '';
  selectEmotion(emotion: string) {
    if (emotion === 'Altro') {
      this.showCustomModal = true;
    } else {
      this.selectedEmotion = emotion;
      this.motivationalPhrase = this.emotionData[emotion].phrase;
      this.selectedEmotionImage = this.emotionData[emotion].image;
    }
  }

  saveCustomEmotion() {
    this.selectedEmotion = this.customEmotionText || 'Altro';
    this.motivationalPhrase = this.generateCustomPhrase(this.customEmotionText);
    this.selectedEmotionImage = this.emotionData['Altro'].image;
    this.showCustomModal = false;
    this.customEmotionText = '';
  }

  closeModal() {
    this.showCustomModal = false;
    this.customEmotionText = '';
  }

  generateCustomPhrase(emotion: string): string {
    // Puoi personalizzarlo con più logica
    if (!emotion) return 'Va bene sentirsi in qualsiasi modo.';

    const emotionLower = emotion.toLowerCase();
    if (emotionLower.includes('stress') || emotionLower.includes('ansia')) {
      return 'Respira profondamente, anche questo momento passerà.';
    }
    if (emotionLower.includes('stanco') || emotionLower.includes('fatica')) {
      return 'Concediti una pausa, lo meriti davvero.';
    }
    if (emotionLower.includes('amore') || emotionLower.includes('innamorata')) {
      return 'L\'amore è la più grande avventura della vita.';
    }
    return 'Ogni emozione è valida, ascoltati e prenditi cura di te.';
  }


  //DA TOGLIERE, MI SERVE SOLO PER LE PROVE
  logout() {
    localStorage.removeItem('utenti');  // o il nome corretto della chiave
    // opzionale: rimuovi altri dati utente salvati
    // this.router.navigateByUrl('/login'); // se hai una pagina di login

    // Redirect alla home o login
    window.location.href = '/login';  // sostituisci con la tua route effettiva
  }

}