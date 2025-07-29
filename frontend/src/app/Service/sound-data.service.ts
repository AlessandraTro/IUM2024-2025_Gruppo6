import {Injectable} from '@angular/core';

interface Card {
    title: string;
    image: string;
    guided: string;
    duration: string;
}

interface Category {
    title: string;
    sessions: number;
    items?: Card[];
}

interface PageMeta {
    title: string;
    image: string;
    subtitle: string;
    description: string;
    categories: Category[];
}

@Injectable({
    providedIn: 'root'
})
export class SoundDataService {

    private library: Record<string, Card[]> = {
        'Rain and Storm Sounds': [
            {
                title: 'Lion’s breath',
                image: 'assets/sound-escape/card/Lion.png',
                guided: 'Unguided',
                duration: '25 min'
            },
            {title: 'Heavy Rain', image: 'assets/sound-escape/card/Rain.png', guided: 'Unguided', duration: '25 min'},
            {title: 'Thunder', image: 'assets/sound-escape/card/thunder.png', guided: 'Unguided', duration: '30 min'}
        ],
        'Wandering in Nature': [
            {
                title: 'Cracking Fire',
                image: 'assets/sound-escape/card/fire.png',
                guided: 'Unguided',
                duration: '45 min'
            },
            {
                title: 'Waterfall Noise',
                image: 'assets/sound-escape/card/waterfall.png',
                guided: 'Unguided',
                duration: '2:20 h'
            },
            {title: 'Birds', image: 'assets/sound-escape/card/birds.png', guided: 'Unguided', duration: '35 min'}
        ],
        'At the Beach': [
            {title: 'Ocean Waves', image: 'assets/sound-escape/card/ocean.png', guided: 'Unguided', duration: '45 min'},
            {
                title: 'By the Shore',
                image: 'assets/sound-escape/card/shore.png',
                guided: 'Unguided',
                duration: '2:20 h'
            },
            {title: 'Sand Wind', image: 'assets/sound-escape/card/sand.png', guided: 'Unguided', duration: '30 min'}
        ]
    };

    private pageMeta: Record<string, Omit<PageMeta, 'categories'> & {
        categories: { title: string; sessions: number }[]
    }> = {
        deepSleep: {
            title: 'Sonno Profondo',
            image: 'assets/sound-escape/deep-sleep.png',
            subtitle: '36 pratiche',
            description: 'Musica e suoni pensati per accompagnarti verso un riposo profondo e continuo.',
            categories: [
                {title: 'Rain and Storm Sounds', sessions: 24},
                {title: 'Wandering in Nature', sessions: 14},
                {title: 'At the Beach', sessions: 8}
            ]
        },
        fallAsleepFast: {
            title: 'Addormentarsi Velocemente',
            image: 'assets/sound-escape/fall-aspleep.png',
            subtitle: '36 pratiche',
            description: 'Suoni della natura per favorire un sonno rapido e naturale.',
            categories: [
                {title: 'Rain and Storm Sounds', sessions: 24},
                {title: 'Wandering in Nature', sessions: 14},
                {title: 'At the Beach', sessions: 8}
            ]
        },
        soundOfNature: {
            title: 'Suoni della Natura',
            image: 'assets/sound-escape/sound-nature.png',
            subtitle: '36 pratiche',
            description: 'I suoni della natura hanno un effetto rigenerante e ricostituente sul corpo.',
            categories: [
                {title: 'Rain and Storm Sounds', sessions: 24},
                {title: 'Wandering in Nature', sessions: 14},
                {title: 'At the Beach', sessions: 8}
            ]
        }
    };

    getPageData(key: string): PageMeta | null {
        const meta = this.pageMeta[key];
        if (!meta) return null;

        return {
            ...meta,
            categories: meta.categories.map((cat): Category => ({
                ...cat,
                items: this.library[cat.title] ?? []
            }))
        };
    }
}
