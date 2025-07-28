import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SoundDataService} from '../../service/sound-data.service';
import {IonicModule} from '@ionic/angular';
import {CommonModule, Location} from '@angular/common';
import {FooterComponent} from "../../component/footer/footer.component";

@Component({
    selector: 'app-sound',
    templateUrl: './sound.page.html',
    styleUrls: ['./sound.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule,
        FooterComponent,
    ]
})
export class SoundPage implements OnInit {
    data: any;

    constructor(
        private route: ActivatedRoute,
        private soundService: SoundDataService,
        private location: Location,
        private router: Router
    ) {
    }

    ngOnInit() {
        const key = this.route.snapshot.paramMap.get('pageKey')!;
        this.data = this.soundService.getPageData(key);
    }

    goBack() {
        this.location.back();
    }

    openPlayer(card: any) {
        this.router.navigate(['/player'], {
            state: {card}
        });
    }
}
