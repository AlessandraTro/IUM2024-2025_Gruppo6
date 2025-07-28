import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
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
    username: string = '';
    userPhoto: string = 'assets/profilo.png';
    showCustomModal: boolean = false;
    customEmotionText: string = '';
    selectedEmotion: string | null = null;
    selectedEmotionImage: string | null = null;
    motivationalPhrase: string | null = null;

    constructor() {
    }

    ngOnInit() {
        const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');


        if (utenteLoggato) {
            this.username = utenteLoggato.nome.split(' ')[0];
        }
    }

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

    ionViewWillEnter() {
        const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');
        if (utenteLoggato) {
            this.username = (utenteLoggato.name || utenteLoggato.nome || 'Utente').split(' ')[0];
            this.userPhoto = utenteLoggato.photo || 'assets/profilo.png';
        }
    }

    generateCustomPhrase(emotion: string): string {
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
}