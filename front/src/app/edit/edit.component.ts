import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking/booking';
import { BookingService } from '../booking/booking.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public service: BookingService) { }

  newBooking: Booking;
  localStorage?: any;

  ngOnInit(): void {
    if (localStorage.getItem('Booking') != null && localStorage.getItem('Booking') != undefined) {
      this.localStorage = localStorage.getItem('Booking');
      this.newBooking = JSON.parse(this.localStorage);
      console.log(this.newBooking);
    }
  }

  updateBooking(booking: Booking):void{
    if (booking != undefined) {
      this.newBooking = booking
      this.service.updateBooking(this.newBooking).subscribe()
      console.log(this.newBooking)
    }
  }
}
