import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(public http: HttpClient) { }

  httpOptions: Object ={
    httpHeaders: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>('https://localhost:44377/api/Bookings')
  }
  
  postBooking(booking: Booking):Observable<Booking>{
    return this.http.post<Booking>('https://localhost:44377/api/Bookings', booking, this.httpOptions)
  }

  updateBooking(booking: Booking): Observable<any>{
    return this.http.put('https://localhost:44377/api/Bookings/'+booking.id, booking, this.httpOptions)
  }

  deleteBooking(id: number): Observable<Booking>{
    return this.http.delete<Booking>('https://localhost:44377/api/Bookings/'+id, this.httpOptions)
  }
  

}
