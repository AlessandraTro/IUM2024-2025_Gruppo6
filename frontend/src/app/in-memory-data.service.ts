import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  private storageKey = 'utenti';  // Chiave per memorizzare gli utenti nel localStorage
  // Utente predefinito
  utenti = [
    { id: 1, nome: 'Sara', email: 'saraVitale@gmail.com', password: '1234' },
  ];

  createDb() {
    // Controlla se nel localStorage ci sono utenti
    let utenti = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    // Se non ci sono utenti, aggiungi l'utente predefinito
    if (utenti.length === 0) {
      utenti = this.utenti;  // Imposta il valore predefinito
      localStorage.setItem(this.storageKey, JSON.stringify(utenti)); // Salva nel localStorage
    }

    return { utenti };  // Ritorna gli utenti in memoria
  }

  addUser(user: any) {
    // Recupera gli utenti dal localStorage
    let utenti = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    // Crea un nuovo utente
    const nuovoUtente = {
      id: Math.floor(Math.random() * 1000), // Genera un ID casuale
      nome: user.name,
      email: user.email,
      password: user.password
    };

    // Aggiungi l'utente all'array
    utenti.push(nuovoUtente);

    // Salva l'array aggiornato nel localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(utenti));
    console.log('Nuovo utente aggiunto:', nuovoUtente); // Verifica se l'utente è stato aggiunto
    return nuovoUtente;
  }
}
