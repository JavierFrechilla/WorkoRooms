import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purpose } from './purpose';

@Injectable({
  providedIn: 'root'
})
export class PurposeService {

  constructor(public http: HttpClient) { }

  getPurpose(): Observable<Purpose[]>{
    return this.http.get<Purpose[]>('https://localhost:44377/api/Purposes')
  }
}
