import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonContent,
    IonFooter,
    IonHeader, IonIcon,
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, CommonModule, FormsModule, IonFooter, IonIcon, RouterLink]
})
export class ChatPage implements OnInit {
    message: string = '';

    constructor() {
    }

    chatHistory: { text: string; sender: 'user' | 'bot' }[] = [];

    sendMessage() {
        const trimmed = this.message.trim();
        if (!trimmed) return;

        this.chatHistory.push({text: trimmed, sender: 'user'});

        setTimeout(() => {
            this.chatHistory.push({
                text: 'È comprensibile. L\'incertezza può sembrare minacciosa, specialmente quando immaginiamo ciò che potrebbe andare storto. Cosa ti preoccupa di più?',
                sender: 'bot'
            });
        }, 500);

        this.message = '';
    }

    ngOnInit() {
    }

}
