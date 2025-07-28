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

    constructor(private router: Router, private location: Location) {
    }

    ngOnInit(): void {
    }

    vaiA(path: string) {
        this.router.navigate([path]);
    }

    goBack() {
        this.location.back();
    }
}
