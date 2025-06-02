import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const utenti = [
      { id: 1, nome: 'Sara', email: 'saraVitale@gmail.com', password:"1234" },
    ];
    return { utenti };
  }
}

