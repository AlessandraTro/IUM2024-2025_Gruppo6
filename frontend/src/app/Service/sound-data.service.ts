import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SoundDataService {
    private data: { [key: string]: {
            title: string;
            image: string;
            subtitle: string;
            description: string;
            categories: { title: string; sessions: number; }[];
        } } = {
        deepSleep: {
            title: 'Sonno Profondo',
            image: 'assets/sound-escape/deep-sleep.png',
            subtitle: '36 practices',
            description: 'Musica e suoni pensati per accompagnarti verso un riposo profondo e continuo.',
            categories: [
                { title: 'Rain and Storm Sounds', sessions: 24 },
                { title: 'Wandering in Nature', sessions: 14 },
                { title: 'At the Beach', sessions: 8 }
            ]
        },
        fallAsleepFast: {
            title: 'Addormentarsi Velocemente',
            image: 'assets/sound-escape/fall-aspleep.png',
            subtitle: '36 practices',
            description: 'Suoni della natura per favorire un sonno rapido e naturale.',
            categories: [
                { title: 'Rain and Storm Sounds', sessions: 24 },
                { title: 'Wandering in Nature', sessions: 14 },
                { title: 'At the Beach', sessions: 8 }
            ]
        },
        soundOfNature: {
            title: 'Suoni della Natura',
            image: 'assets/sound-escape/sound-nature.png',
            subtitle: '36 practices',
            description: 'I suoni della natura hanno un effetto rigenerante e ricostituente sul corpo.',
            categories: [
                { title: 'Rain and Storm Sounds', sessions: 24 },
                { title: 'Wandering in Nature', sessions: 14 },
                { title: 'At the Beach', sessions: 8 }
            ]
        }
    };

    getPageData(key: string) {
        return this.data[key];
    }
}
