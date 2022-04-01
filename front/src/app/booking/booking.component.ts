import { Component, OnInit } from '@angular/core';
import { Room } from '../room/room';
import { RoomService } from '../room/room.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public service: BookingService, public UserService: UserService, public RoomService: RoomService) { }

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
  userOb?:User[];
  roomOb?:Room[];
  roomObId?:Room[];
  id:number=0
  
  ngOnInit(): void {
    this.getdataUser()
    this.getdataRoom()
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

  getdataUser():void{
    this.UserService.getUsers().subscribe(data=>{this.userOb=data;
    console.log(this.userOb);
  })
  }

  getdataRoom():void{
    this.RoomService.getRoom().subscribe(data=>{this.roomOb=data;
    console.log(this.roomOb);
    })}

  getRoomId(id: number):void{
  this.RoomService.getRoomId(id).subscribe(data=>{this.roomObId=data;
    console.log(this.roomObId);
    })
}

}
