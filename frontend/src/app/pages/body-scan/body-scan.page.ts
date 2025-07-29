import {Component} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FooterComponent} from "../../component/footer/footer.component";
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-body-scan',
    templateUrl: './body-scan.page.html',
    styleUrls: ['./body-scan.page.scss'],
    standalone: true,
    imports: [CommonModule, FooterComponent, IonicModule]
})
export class BodyScanPage {
    audioPlayer: HTMLAudioElement;
    audioProgress: number = 0;
    currentTime: string = '00:00';
    duration: string = '00:00';
    isPlaying: boolean = false;

    constructor(private location: Location) {
        this.audioPlayer = new Audio('assets/audio/body-scan.mp3');
    }

    ngAfterViewInit() {
        this.audioPlayer.addEventListener('timeupdate', () => this.updateProgress());
        this.audioPlayer.addEventListener('loadedmetadata', () => this.setDuration());
    }

    // Ferma l'audio quando la pagina viene distrutta
    ngOnDestroy() {
        if (this.audioPlayer) {
            this.audioPlayer.pause();
            this.audioPlayer.currentTime = 0;
        }
    }

    goBack() {
        this.location.back();
    }

    // Metodo per play/pause
    togglePlay() {
        if (this.audioPlayer.paused) {
            this.audioPlayer.play();
            this.isPlaying = true;
        } else {
            this.audioPlayer.pause();
            this.isPlaying = false;
        }
    }

    // Metodo per saltare indietro
    skipBack() {
        this.audioPlayer.currentTime = Math.max(this.audioPlayer.currentTime - 10, 0);
    }

    // Metodo per saltare avanti
    skipForward() {
        this.audioPlayer.currentTime = Math.min(this.audioPlayer.currentTime + 10, this.audioPlayer.duration);
    }

    // Metodo per aggiornare il progresso della barra
    updateProgress() {
        if (this.audioPlayer) {
            this.audioProgress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 910;
            this.currentTime = this.formatTime(this.audioPlayer.currentTime);
        }
    }

    // Metodo per impostare la durata dell'audio
    setDuration() {
        this.duration = this.formatTime(this.audioPlayer.duration);
    }

    // Metodo per formattare il tempo in formato mm:ss
    formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
    }


    // Metodo per aggiungere uno zero davanti a numeri minori di 10
    padZero(number: number): string {
        return number < 10 ? '0' + number : number.toString();
    }

    // Metodo per cercare una posizione nell'audio (quando l'utente interagisce con la barra)
    seekAudio(event: any) {
        const progress = event.detail.value; // Ottieni il valore della barra
        const newTime = (progress / 910) * this.audioPlayer.duration; // Mappa il valore alla posizione dell'audio
        this.audioPlayer.currentTime = newTime;
    }
}
