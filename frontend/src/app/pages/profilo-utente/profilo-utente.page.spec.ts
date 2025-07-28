import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  constructor(private alertCtrl: AlertController) {}

  async deleteAccount() {
    const alert = await this.alertCtrl.create({
      header: 'Attenzione',
      message: 'Sei sicura di voler eliminare il tuo account?',
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Elimina',
          handler: () => {
            console.log('Account eliminato');
          },
        },
      ],
    });
    await alert.present();
  }
}
