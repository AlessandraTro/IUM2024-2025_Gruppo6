import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    private storageKey = 'utenti';
    utenti = [
        {id: 1, nome: 'Sara', email: 'saraVitale@gmail.com', password: '1234'},
    ];

    createDb() {
        const storageKey = this.storageKey;
        let utenti = JSON.parse(localStorage.getItem(storageKey) || '[]');

        const saraPresente = utenti.some((u: any) => u.email.toLowerCase() === 'saravitale@gmail.com');

        if (!saraPresente) {
            utenti.push(...this.utenti);
            localStorage.setItem(storageKey, JSON.stringify(utenti));
        }

        return {utenti};
    }

    addUser(user: any) {
        let utenti = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

        const nuovoUtente = {
            id: Math.floor(Math.random() * 1000),
            nome: user.name,
            email: user.email,
            password: user.password
        };

        if (utenti.some((u: any) => u.email.toLowerCase() === user.email.toLowerCase())) {
            console.error('Email già registrata');
            return null;
        }

        utenti.push(nuovoUtente);

        localStorage.setItem(this.storageKey, JSON.stringify(utenti));
        console.log('Nuovo utente aggiunto:', nuovoUtente);
        return nuovoUtente;
    }
}
