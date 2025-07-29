import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DiarioService {

    constructor() {
    }

    saveDiaryEntries(entries: { [key: string]: string }) {
        localStorage.setItem('diaryEntries', JSON.stringify(entries));
    }

    loadDiaryEntries(): { [key: string]: string } {
        const savedEntries = localStorage.getItem('diaryEntries');
        return savedEntries ? JSON.parse(savedEntries) : {};
    }
}
