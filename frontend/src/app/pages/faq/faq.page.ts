import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from "@ionic/angular";
import { HeaderImpostazioniPage } from '../../component/header-impostazioni/header-impostazioni.page';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  standalone: true,
    imports: [HeaderImpostazioniPage, CommonModule, FormsModule, IonicModule]
})
export class FaqPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
