import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
    selector: 'app-obiettivi',
    standalone: true,
    templateUrl: './obiettivi.page.html',
    styleUrls: ['./obiettivi.page.scss'],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,          // ✅ contiene già IonFooter
        FooterComponent       // ✅ componente del tuo footer
    ]
})
export class ObiettiviPage implements OnInit {
    obiettivi: { titolo: string; completato: boolean }[] = [];

    constructor(private alertCtrl: AlertController) {}

    ngOnInit() {
        const salvati = localStorage.getItem('obiettivi');
        if (salvati) {
            this.obiettivi = JSON.parse(salvati);
        }
    }

    salvaObiettivi() {
        localStorage.setItem('obiettivi', JSON.stringify(this.obiettivi));
    }

    toggleCheckbox() {
        this.salvaObiettivi();
    }

    async aggiungiObiettivo() {
        const alert = await this.alertCtrl.create({
            header: 'Nuovo Obiettivo',
            cssClass: 'custom-alert',
            inputs: [
                {
                    name: 'titolo',
                    type: 'text',
                    placeholder: 'Scrivi un nuovo obiettivo'
                }
            ],
            buttons: [
                { text: 'Annulla', role: 'cancel' },
                {
                    text: 'Aggiungi',
                    handler: (data) => {
                        if (data?.titolo?.trim()) {
                            this.obiettivi.push({ titolo: data.titolo.trim(), completato: false });
                            this.salvaObiettivi();
                        }
                    }
                }
            ]
        });

        await alert.present();
    }

    eliminaObiettivo() {
        this.obiettivi = this.obiettivi.filter(o => !o.completato);
        this.salvaObiettivi();
    }

    async modificaObiettivo() {
        const selezionati = this.obiettivi.filter(o => o.completato);
        if (selezionati.length !== 1) {
            const alert = await this.alertCtrl.create({
                header: 'Errore',
                message: 'Seleziona un solo obiettivo da modificare.',
                buttons: ['OK'],
                cssClass: 'custom-alert'
            });
            await alert.present();
            return;
        }

        const obiettivo = selezionati[0];

        const alert = await this.alertCtrl.create({
            header: 'Modifica Obiettivo',
            cssClass: 'custom-alert',
            inputs: [
                {
                    name: 'titolo',
                    type: 'text',
                    value: obiettivo.titolo
                }
            ],
            buttons: [
                { text: 'Annulla', role: 'cancel' },
                {
                    text: 'Salva',
                    handler: (data) => {
                        if (data?.titolo?.trim()) {
                            obiettivo.titolo = data.titolo.trim();
                            this.salvaObiettivi();
                        }
                    }
                }
            ]
        });

        await alert.present();
    }
}
