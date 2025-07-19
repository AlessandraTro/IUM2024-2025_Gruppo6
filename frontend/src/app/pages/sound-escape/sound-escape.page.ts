import { Component, OnInit } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    IonBackButton, IonButton,
    IonButtons,
    IonContent, IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../../component/footer/footer.component";
import {TrackCardComponent} from "../../component/track-card/track-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sound-escape',
  templateUrl: './sound-escape.page.html',
  styleUrls: ['./sound-escape.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FooterComponent, IonButtons, IonIcon, TrackCardComponent, IonFooter]
})
export class SoundEscapePage implements OnInit {

    constructor(private router: Router, private location: Location) {}
    openPage(key: string) {
        this.router.navigate(['/sound', key]);
    }
  ngOnInit() {
  }

    goBack() {
        this.location.back();
    }
}
