import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonContent,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonCardContent, IonButton, IonCard, IonButtons, IonModal
} from '@ionic/angular/standalone';

@Component({
    selector: 'app-community',
    templateUrl: './community.page.html',
    styleUrls: ['./community.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonIcon, IonCardContent, IonButton, IonCard, IonButtons, IonModal]
})
export class CommunityPage implements OnInit {

    messages = [
        {
            user: 'me',
            text: 'Stamattina ansia a mille per una presentazione di 10 minuti. È andata pure bene. Che fatica però'
        },
        {user: 'other', text: 'Vero! L\'ansia fa tutto un film drammatico, poi nella realtà è molto meno tragico.'},
        {
            user: 'other',
            text: 'Io metto una playlist di rumori di pioggia. L\'ansia si placa un po\' quando sento qualcosa di familiare.'
        },
        {
            user: 'other',
            text: 'Ho un esame domani e la mia mente ha deciso che ora è il momento giusto per pensare a errori del 2019. Perfetto.'
        },
        {
            user: 'me',
            text: 'Classico. Io di solito ripeto tutto ad alta voce... davanti allo specchio... fingendo di essere in TED Talk'
        },
        {user: 'other', text: 'Se prendo almeno 24 lo dedico a questa chat.'}
    ];

    message: string = '';
    chatHistory: { text: string; sender: 'user' | 'bot' }[] = [];
    isHelpModalOpen: boolean = false;

    constructor(private location: Location) {
    }

    ngOnInit(): void {
        this.chatHistory = this.messages.map(m => ({
            text: m.text,
            sender: m.user === 'me' ? 'user' : 'bot'
        }));
    }

    sendMessage() {
        const trimmedMessage = this.message.trim();
        if (!trimmedMessage) return;

        this.chatHistory.push({text: trimmedMessage, sender: 'user'});

        this.message = '';
    }

    openHelpModal() {
        this.isHelpModalOpen = true;
    }

    closeHelpModal() {
        this.isHelpModalOpen = false;
    }

    goBack() {
        this.location.back();
    }
}
