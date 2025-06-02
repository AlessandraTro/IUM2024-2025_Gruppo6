import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home-benvenuto',
  templateUrl: './home-benvenuto.page.html',
  styleUrls: ['./home-benvenuto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomeBenvenutoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
