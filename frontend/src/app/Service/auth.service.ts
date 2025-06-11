import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InMemoryDataService } from '../in-memory-data.service'; // Importa il servizio

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private inMemoryDataService: InMemoryDataService) { }

    // Metodo per registrare un nuovo utente
    registerUser(name: string, email: string, password: string): Observable<any> {
        const userData = { name, email, password };
        // Usa il metodo addUser di InMemoryDataService per aggiungere l'utente
        const nuovoUtente = this.inMemoryDataService.addUser(userData);
        return of(nuovoUtente); // Restituisce un Observable con il nuovo utente
    }
}
