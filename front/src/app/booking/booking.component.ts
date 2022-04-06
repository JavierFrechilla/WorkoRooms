import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant/participant.service';
import { Participant } from '../participant/participant';
import { Purpose } from '../purpose/purpose';
import { PurposeService } from '../purpose/purpose.service';
import { Room } from '../room/room';
import { RoomService } from '../room/room.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Booking } from './booking';
import { BookingService } from './booking.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public service: BookingService, public UserService: UserService, public RoomService: RoomService, public PurposeService: PurposeService, public ParticipantService: ParticipantService) { }

  newBooking: Booking = {
    userId: 0,
    purposeId: 0,
    roomId: 0,
    dateIn: new Date(),
    dateOut: new Date(),
    participants: [],
    
  };
  participants?: Participant[];
  booking?: Booking;
  bookings?: Booking[];
  userOb?: User[];
  roomOb?: Room[];
  purposeOb?: Purpose[];
  roomObId?: Room[];
  id: number = 0;
  userId: number = 0;
  highLightV: number = -1;
  today: any = new Date().toISOString().substring(0, 16)
  
  ngOnInit(): void {
    this.getdataUser()
    this.getdataRoom()
    this.getdataPurpose()
    if(localStorage.getItem("User")){
      this.userId = JSON.parse(JSON.stringify(localStorage.getItem("User")))
      console.log(this.userId)
    }
  }

  getBookings():void{
    this.service.getBookings().subscribe(data=>{this.bookings=data;
      console.log(this.bookings);
    })
  }

  postBooking():void{
    this.newBooking.userId = this.userId;
    console.log(this.newBooking)
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
    })
  }

  getdataPurpose():void{
    this.PurposeService.getPurpose().subscribe(data=>{this.purposeOb=data;
    console.log(this.purposeOb);
    })
  }

  postParticipants():void{
    if(this.participants != undefined){
      this.ParticipantService.postParticipants(this.participants).subscribe()
    }
  }

  highLight(): void{
    // console.log(this.highLightV)
    this.newBooking.roomId = this.highLightV
  }

}
