import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UtenteService {
    private apiUrl = 'api/utenti';

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
