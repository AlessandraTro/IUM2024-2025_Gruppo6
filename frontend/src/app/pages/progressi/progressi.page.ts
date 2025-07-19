import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../../component/footer/footer.component";

@Component({
  selector: 'app-progressi',
  templateUrl: './progressi.page.html',
  styleUrls: ['./progressi.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, FooterComponent]
})
export class ProgressiPage implements OnInit {

  ngOnInit() {
  }

}
