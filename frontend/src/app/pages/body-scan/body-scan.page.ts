import { Component } from '@angular/core';
import {

} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "../../component/footer/footer.component";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-body-scan',
  templateUrl: './body-scan.page.html',
  styleUrls: ['./body-scan.page.scss'],
  standalone: true,
  imports: [
    CommonModule,

    FooterComponent,
    IonicModule
  ]
})
export class BodyScanPage {}