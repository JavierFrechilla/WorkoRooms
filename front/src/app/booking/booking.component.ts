import { Component, OnInit } from '@angular/core';
import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public service: BookingService) { }

  newBooking: Booking = {
    userId: 0,
    purposeId: 0,
    roomId: 0,
    dateIn: new Date(),
    dateOut: new Date(),
    participants: [],
  };
  booking?: Booking;
  bookings?: Booking[];
  
  ngOnInit(): void {
  }

  getBookings():void{
    this.service.getBookings().subscribe(data=>{this.bookings=data;
    console.log(this.bookings);
  })
  }

  postBooking():void{
    this.service.postBooking(this.newBooking).subscribe()
  }

  updateBooking(booking: Booking):void{
    if (booking != undefined) {
      this.booking = booking
      this.service.updateBooking(this.booking).subscribe()
      console.log(this.booking)
    }
  }

  deleteBooking(booking: Booking): void{
    if (booking.id != undefined)
    {
      this.service.deleteBooking(booking.id).subscribe();
    }
  }
}
