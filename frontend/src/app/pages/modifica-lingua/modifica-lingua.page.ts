import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderImpostazioniPage } from '../../component/header-impostazioni/header-impostazioni.page';

@Component({
  selector: 'app-modifica-lingua',
  templateUrl: './modifica-lingua.page.html',
  styleUrls: ['./modifica-lingua.page.scss'],
  standalone: true,
  imports: [HeaderImpostazioniPage, IonicModule, CommonModule, FormsModule]
})
export class ModificaLinguaPage implements OnInit {

  languages = [
    { value: 'it', label: 'Italiano' },
    { value: 'fr', label: 'Francese' },
    { value: 'en', label: 'Inglese' },
    { value: 'de', label: 'Tedesco' },
    { value: 'es', label: 'Spagnolo' },
  ];

  selectedLanguage: string = 'it';

  constructor() {}

  ngOnInit() {}

  selectLanguage(value: string) {
    this.selectedLanguage = value;
  }

}
