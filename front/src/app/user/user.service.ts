import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient) { }

  httpOptions: Object ={
    httpHeaders: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://localhost:44377/api/Users')
  }
  
  getUser(id:number):Observable<User>{
    return this.http.get<User>('https://localhost:44377/api/Users/' + id)
  }

  checkUser(email: string, password: string): Observable<number>{
    return this.http.get<number>('https://localhost:44377/api/Users/login/' + email + '/' + password)
  }
  
  postUser(user: User):Observable<User>{
    return this.http.post<User>('https://localhost:44377/api/Users', user, this.httpOptions)
  }

  updateUser(user: User): Observable<any>{
    return this.http.put('https://localhost:44377/api/Users/'+user.id, user, this.httpOptions)
  }

  deleteUser(id: number): Observable<User>{
    return this.http.delete<User>('https://localhost:44377/api/Users/'+id, this.httpOptions)
  }
}