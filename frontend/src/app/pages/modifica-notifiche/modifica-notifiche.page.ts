import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {IonicModule} from "@ionic/angular";
import {HeaderImpostazioniPage} from "../../component/header-impostazioni/header-impostazioni.page";

@Component({
    selector: 'app-modifica-notifiche',
    templateUrl: './modifica-notifiche.page.html',
    styleUrls: ['./modifica-notifiche.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HeaderImpostazioniPage,
    ]
})
export class ModificaNotifichePage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
