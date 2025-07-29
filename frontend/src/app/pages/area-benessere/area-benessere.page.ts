import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {} from '@ionic/angular/standalone';
import {FooterComponent} from '../../component/footer/footer.component';
import {RouterModule, Router} from '@angular/router';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-area-benessere',
    templateUrl: './area-benessere.page.html',
    styleUrls: ['./area-benessere.page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FooterComponent,
        IonicModule,
    ]
})
export class AreaBenesserePage implements OnInit {
    username: string = '';
    userPhoto: string = 'assets/profilo.png';

    constructor(private router: Router, private location: Location) {
    }

    ngOnInit() {
        const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');


        if (utenteLoggato) {
            this.username = utenteLoggato.nome.split(' ')[0];
        }
    }

    ionViewWillEnter() {
        const utenteLoggato = JSON.parse(localStorage.getItem('utenteLoggato') || 'null');
        if (utenteLoggato) {
            this.username = (utenteLoggato.name || utenteLoggato.nome || 'Utente').split(' ')[0];
            this.userPhoto = utenteLoggato.photo || 'assets/profilo.png';
        }
    }

    vaiA(path: string) {
        this.router.navigate([path]);
    }

    goBack() {
        this.location.back();
    }
}
