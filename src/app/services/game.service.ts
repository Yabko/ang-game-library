import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../Game';
import { GAMES } from '../mock-games';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = "http://localhost:5000/games"

  constructor(private http:HttpClient) { }

  getGames(): Observable<Game[]> {
   return this.http.get<Game[]>(this.apiUrl)
  }
}
