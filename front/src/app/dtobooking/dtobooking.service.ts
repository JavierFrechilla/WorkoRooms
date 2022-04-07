import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dtobooking } from './dtobooking';

@Injectable({
  providedIn: 'root'
})
export class DtobookingService {

  constructor(public http: HttpClient) { }

  httpOptions: Object ={
    httpHeaders: new HttpHeaders({'Content-Type': 'application/json'})
  }

  postBookingAndParticipants(dtobooking: Dtobooking): Observable<Dtobooking>{
    return this.http.post<Dtobooking>('https://localhost:44377/api/DTOBookingWithParticipants/', dtobooking, this.httpOptions)
  }
}
