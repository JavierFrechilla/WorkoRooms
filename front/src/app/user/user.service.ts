import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://localhost:44377/api/Users')
  }
  
  getUser(id:number):Observable<User>{
    return this.http.get<User>('https://localhost:44377/api/Users/' + id)
  }

  checkUser(email: string, password: string): Observable<number>{
    return this.http.get<number>('https://localhost:44377/api/Users/login/' + email + '/' + password)
  }
}
  

