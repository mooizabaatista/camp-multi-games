import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ranking } from '../interfaces/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  API_URL: string = 'https://midbot.bsite.net';

  constructor(private http: HttpClient) { }

  getRanking(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.API_URL}/tabela/all`)
  }

}
