import { Component } from '@angular/core';
import {

} from '@ionic/angular/standalone';
import {CommonModule, Location} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {FooterComponent} from "../../component/footer/footer.component";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-meditazione',
  templateUrl: './meditazione.page.html',
  styleUrls: ['./meditazione.page.scss'],
  standalone: true,
    imports: [
        CommonModule,
        RouterModule,

        FooterComponent,
        IonicModule,
        // Aggiunto IonTextarea
    ]
})
export class MeditazionePage {
    constructor(private location: Location) {
    }
  openLink(url: string) {
    window.open(url, '_blank');
  }
    goBack() {
        this.location.back();
    }
}
