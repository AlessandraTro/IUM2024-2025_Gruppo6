import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InMemoryDataService } from '../in-memory-data.service'; // Importa il servizio

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private inMemoryDataService: InMemoryDataService) { }

    registerUser(name: string, email: string, password: string): Observable<any> {
        const userData = { name, email, password };
        const nuovoUtente = this.inMemoryDataService.addUser(userData);

        if (!nuovoUtente) {
            // Simula un errore per l'observable se l'utente è null (email duplicata)
            return new Observable(observer => {
                observer.error('Email già registrata');
            });
        }

        return of(nuovoUtente);
    }
}
