import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dtocalendar } from './dtocalendar';

@Injectable({
  providedIn: 'root'
})
export class DtocalendarService {

  constructor(public http: HttpClient) { }

  getData(): Observable<Dtocalendar[]>{
    return this.http.get<Dtocalendar[]>('https://localhost:44377/api/DTOCalendars')
  }
}
