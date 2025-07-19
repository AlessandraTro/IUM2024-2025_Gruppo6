import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../../component/footer/footer.component";
import { Location } from '@angular/common';
@Component({
  selector: 'app-contenuti',
  templateUrl: './contenuti.page.html',
  styleUrls: ['./contenuti.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonGrid, IonIcon, FooterComponent, IonFooter]
})
export class ContenutiPage implements OnInit {
  username: string = '';
  constructor(private location: Location) { }

  ngOnInit() {
    // Recupera gli utenti da localStorage
    const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');


    if (utenteLoggato) {
      // Imposta il nome dell'utente
      this.username = utenteLoggato.nome.split(' ')[0];  // prende solo il primo nome
    }
  }

  openLink(url: string) {
    window.location.href = url;
  }



  goBack() {
    this.location.back();
  }
}
