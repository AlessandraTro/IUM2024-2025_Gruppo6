 import { Component, OnInit } from '@angular/core';
 import {IonicModule} from "@ionic/angular";
 import {FormsModule} from "@angular/forms";
 import {CommonModule} from "@angular/common";
 import { ToastController } from '@ionic/angular';
 import { UtenteService } from '../../Service/utente.service';
 import { HeaderImpostazioniPage } from '../../component/header-impostazioni/header-impostazioni.page';


 @Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.page.html',
  styleUrls: ['./modifica-profilo.page.scss'],
  standalone: true,
  imports: [HeaderImpostazioniPage,IonicModule, FormsModule, CommonModule]
})

export class ModificaProfiloPage implements OnInit {
  user: any = {
    name: '',
    email: '',
    birthDate: '',
    country: '',
    photo: 'assets/profilo.png' // valore di default
  };

  countries: string[] = [];
  constructor(
      private toastController: ToastController,
      private utenteService: UtenteService
  ) {}

  ngOnInit() {
    const utenteJson = localStorage.getItem('utenteLoggato') || sessionStorage.getItem('utenteLoggato');

    if (utenteJson) {
      this.user = JSON.parse(utenteJson);
    } else {
      // Utente non loggato: puoi fare redirect o mostrare messaggio
      console.warn('Utente non loggato');
    }

    this.loadCountries();
  }

   ionViewWillEnter() {
     this.loadUser();
   }

   loadUser() {
     const utenteJson = localStorage.getItem('utenteLoggato') || sessionStorage.getItem('utenteLoggato');
     if (utenteJson) {
         const utente = JSON.parse(utenteJson);

       if (!this.user.photo) {
           this.user.name = utente.name || utente.nome || '';
           this.user.photo = 'assets/profilo.png';
         // default se manca foto
       }
     }
   }

   loadCountries() {
    this.countries = [
      'Argentina', 'Australia', 'Austria', 'Belgio', 'Brasile', 'Bulgaria', 'Canada', 'Cile',
      'Cina', 'Colombia', 'Corea del Sud', 'Croazia', 'Danimarca', 'Egitto', 'Emirati Arabi Uniti',
      'Estonia', 'Filippine', 'Finlandia', 'Francia', 'Germania', 'Giappone', 'Grecia', 'India',
      'Indonesia', 'Irlanda', 'Islanda', 'Italia', 'Lettonia', 'Lituania', 'Lussemburgo', 'Malesia',
      'Malta', 'Messico', 'Norvegia', 'Nuova Zelanda', 'Paesi Bassi', 'Polonia', 'Portogallo',
      'Regno Unito', 'Repubblica Ceca', 'Romania', 'Russia', 'Serbia', 'Singapore', 'Slovacchia',
      'Slovenia', 'Spagna', 'Stati Uniti', 'Sudafrica', 'Svezia', 'Svizzera', 'Tailandia', 'Turchia',
      'Ucraina', 'Ungheria', 'Vietnam'
    ].sort(); // Ordinati alfabeticamente
  }
  async saveProfile() {
    // ✅ Aggiorna i dati nel localStorage tramite il servizio
    this.utenteService.updateUser(this.user);

    // ✅ Aggiorna anche l'utente attualmente loggato
    localStorage.setItem('utenteLoggato', JSON.stringify(this.user));

    await this.mostraToastSuccesso();
  }

  showDatePicker = false;

  toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }

  onDateChange(event: any) {
    this.user.birthDate = event.detail.value;
    this.showDatePicker = false; // chiude il calendario dopo la selezione
  }


     changePhoto() {
         const input = document.createElement('input');
         input.type = 'file';
         input.accept = 'image/*';

         input.onchange = (event: any) => {
             const file = event.target.files[0];
             if (file) {
                 const reader = new FileReader();
                 reader.onload = () => {
                     // ✅ Cambiamo solo l'immagine in memoria
                     this.user.photo = reader.result as string;
                 };
                 reader.readAsDataURL(file);
             }
         };

         input.click();
     }



     async mostraToastSuccesso() {
    const toast = await this.toastController.create({
      message: '✅ Profilo aggiornato!',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
  }
}
