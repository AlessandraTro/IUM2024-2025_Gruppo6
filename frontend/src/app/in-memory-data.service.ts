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
    const storageKey = this.storageKey;
    let utenti = JSON.parse(localStorage.getItem(storageKey) || '[]');

    // Controlla se Sara è già presente
    const saraPresente = utenti.some((u: any) => u.email.toLowerCase() === 'saravitale@gmail.com');

    if (!saraPresente) {
      // Aggiungi Sara all'elenco solo se non c'è già
      utenti.push(...this.utenti);
      localStorage.setItem(storageKey, JSON.stringify(utenti));
    }

    return { utenti };
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

    if (utenti.some((u: any) => u.email.toLowerCase() === user.email.toLowerCase())) {
      console.error('Email già registrata');
      return null;
    }

    // Aggiungi l'utente all'array
    utenti.push(nuovoUtente);

    // Salva l'array aggiornato nel localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(utenti));
    console.log('Nuovo utente aggiunto:', nuovoUtente); // Verifica se l'utente è stato aggiunto
    return nuovoUtente;
  }
}
