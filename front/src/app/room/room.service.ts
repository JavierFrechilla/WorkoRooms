import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from './room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(public http: HttpClient) { }


  getRoom(): Observable<Room[]>{
      return this.http.get<Room[]>('https://localhost:44377/api/Rooms')
    }
  }

