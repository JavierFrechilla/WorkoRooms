import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant/participant.service';
import { Participant } from '../participant/participant';
import { Purpose } from '../purpose/purpose';
import { PurposeService } from '../purpose/purpose.service';
import { Room } from '../room/room';
import { RoomService } from '../room/room.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Booking } from '../booking/booking';
import { BookingService } from '../booking/booking.service';
import { DtobookingService } from './dtobooking.service';
import { Dtobooking } from './dtobooking';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-dtobooking',
  templateUrl: './dtobooking.component.html',
  styleUrls: ['./dtobooking.component.css']
})
export class DtobookingComponent implements OnInit {

  constructor(public service: BookingService, public UserService: UserService, public RoomService: RoomService, public PurposeService: PurposeService, public ParticipantService: ParticipantService, public DTOService: DtobookingService) { }

  newBooking: Booking = {
    id: Guid.create(),
    userId: 0,
    purposeId: 0,
    roomId: 0,
    dateIn: new Date(),
    dateOut: new Date(),
  };
  participants: Participant[] = [];
  participant: Participant = {
    userId: 0,
    bookingId: null
  };
  DTO: Dtobooking = {
    booking: this.newBooking,
    participants: this.participants
  }
  userOb?: User[];
  roomOb?: Room[];
  purposeOb?: Purpose[];
  userId: number = 0;
  highLightV: number = -1;
  today: any = new Date().toISOString().substring(0, 16)

  ngOnInit(): void {
    this.getdataUser()
    this.getdataRoom()
    this.getdataPurpose()
    this.changeScroll()
    if(localStorage.getItem("User")){
      this.userId = JSON.parse(JSON.stringify(localStorage.getItem("User")))
      console.log(this.userId)
    }
  }
  ngOnDestroy(): void{
    this.backToscroll()
  }
  
  postBookingAndParticipants():void{
    this.newBooking.userId = this.userId;
    console.log(this.newBooking)
    // this.participant.bookingId = this.newBooking.id
    // console.log(this.participant)
    // this.participants.push(this.participant)
    console.log(this.participants)
    let array = Object.keys(this.participants).filter((key)=> {return this.participants[key]});
    console.log(array)
    this.DTOService.postBookingAndParticipants(this.DTO).subscribe()
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
  
  highLight(): void{
    // console.log(this.highLightV)
    this.newBooking.roomId = this.highLightV
  }
  changeScroll(){
    const body = document.querySelector("body")
    body?.classList.add("noScroll")
  }

  backToscroll(){
    const body = document.querySelector("body")
    body?.classList.remove("noScroll")
  }
}
