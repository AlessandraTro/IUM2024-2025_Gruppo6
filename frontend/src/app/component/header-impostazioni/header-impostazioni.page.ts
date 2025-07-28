import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header-impostazioni',
  templateUrl: './header-impostazioni.page.html',
  styleUrls: ['./header-impostazioni.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class HeaderImpostazioniPage implements OnInit {
  @Input() subtitle: string = '';
  constructor() { }

  ngOnInit() {
  }

}
