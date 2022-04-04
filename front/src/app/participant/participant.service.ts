import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from './participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(public http: HttpClient) { }

  httpOptions: Object ={
    httpHeaders: new HttpHeaders({'Content-Type': 'application/json'})
  }

  postParticipants(participant: Participant[]): Observable<Participant[]>{
    return this.http.post<Participant[]>('https://localhost:44377/api/Participants', participant, this.httpOptions)
  }
}
