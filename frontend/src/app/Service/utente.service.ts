import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UtenteService {
    private apiUrl = 'api/utenti';
    private storageKey = 'utenti';
    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<any | null> {
        return new Observable(observer => {
            const utenti = JSON.parse(localStorage.getItem('utenti') || '[]');

            // Cerca utente con email (case insensitive) e password esatta
            const utente = utenti.find((u: any) =>
                u.email.toLowerCase() === email.toLowerCase() && u.password === password
            );

            observer.next(utente || null);
            observer.complete();
        });
    }

    initializeUtenti() {
        const storageKey = 'utenti';
        let utenti = JSON.parse(localStorage.getItem(storageKey) || '[]');

        const saraPresente = utenti.some(
            (u: any) => u.email.toLowerCase() === 'saravitale@gmail.com'
        );

        if (!saraPresente) {
            const sara = {
                id: 1,
                nome: 'Sara',
                email: 'saraVitale@gmail.com',
                password: '1234'
            };
            utenti.push(sara);
            localStorage.setItem(storageKey, JSON.stringify(utenti));
            console.log('Sara inserita nel localStorage');
        }
    }
    updateUser(updatedUser: any): void {
        let utenti = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        utenti = utenti.map((u: any) =>
            u.email.toLowerCase() === updatedUser.email.toLowerCase() ? { ...u, ...updatedUser } : u
        );
        localStorage.setItem(this.storageKey, JSON.stringify(utenti));
    }
}
