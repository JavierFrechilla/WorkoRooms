import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>('https://localhost:44377/api/Users')
  }
}
  

