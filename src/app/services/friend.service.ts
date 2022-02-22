import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from '../Friend';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private apiUrl = "https://ohorak-ang.azurewebsites.net/friends";

  constructor(private http: HttpClient) { }
  
  getFriends(): Observable<Friend[]> {
   return this.http.get<Friend[]>(this.apiUrl)
  }
}
