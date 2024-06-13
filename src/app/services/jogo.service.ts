import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../interfaces/jogo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'https://midbot.bsite.net/jogo';

  getJogos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.API_URL);
  }
}
