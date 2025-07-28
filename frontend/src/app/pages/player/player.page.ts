import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonContent, IonIcon, IonRange} from '@ionic/angular/standalone';
import {Router} from "@angular/router";


@Component({
    selector: 'app-player',
    templateUrl: './player.page.html',
    styleUrls: ['./player.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, IonRange, IonIcon]
})
export class PlayerPage implements AfterViewInit {
    card: any;
    @ViewChild('audioPlayer', {static: false}) audioPlayer!: ElementRef<HTMLAudioElement>;
    currentTime = 0;
    duration = 0;
    intervalId: any;
    isPlaying = false;
    isSessionEnded = false;
    showRatingModal = false;
    rating = 0;
    showThanksPopup = false;


    formatTime(seconds: number): string {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${this.pad(min)}:${this.pad(sec)}`;
    }

    pad(val: number): string {
        return val < 10 ? '0' + val : val.toString();
    }


    constructor(private router: Router) {
        const nav = this.router.getCurrentNavigation();
        this.card = nav?.extras.state?.['card'] || null;
    }


    goBack() {
        const audio = this.audioPlayer?.nativeElement;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        clearInterval(this.intervalId);
        window.history.back();
    }


    ngAfterViewInit() {
        const audio = this.audioPlayer?.nativeElement;
        if (audio) {
            audio.play().then(() => this.isPlaying = true).catch(() => {
            });
            this.duration = audio.duration;

            this.intervalId = setInterval(() => {
                this.currentTime = audio.currentTime;
                this.duration = audio.duration || this.duration;
            }, 1000);

            audio.addEventListener('ended', () => {
                this.isPlaying = false;
                clearInterval(this.intervalId);
                this.isSessionEnded = true;
            });
        }
    }

    togglePlayPause() {
        const audio = this.audioPlayer?.nativeElement;
        if (!audio) return;

        if (this.isPlaying) {
            audio.pause();
            this.isPlaying = false;
        } else {
            audio.play().catch(() => {
            });
            this.isPlaying = true;
        }
    }

    onSave() {
        this.showRatingModal = true;
    }

    closeRatingModal() {
        const audio = this.audioPlayer?.nativeElement;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        clearInterval(this.intervalId);


        this.router.navigate(['/sound-escape']);
    }

    submitRating() {
        this.showThanksPopup = true;

        setTimeout(() => {
            this.showThanksPopup = false;
            this.closeRatingModal();
        }, 2000);
    }
}
