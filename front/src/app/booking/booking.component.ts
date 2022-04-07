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
  };
  participant: Participant = {
    userId: 0,
    bookingId: this.newBooking.id
  };
  participants?: Participant[];
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

  postBooking():void{
    this.newBooking.userId = this.userId;
    console.log(this.newBooking)
    this.service.postBooking(this.newBooking).subscribe()
    console.log(this.participant)
    console.log(this.participants)
    if(this.participants != undefined){
      if(this.newBooking.roomId == 1 || this.newBooking.roomId == 2){
        this.ParticipantService.postParticipants(this.participants).subscribe()
      }
      if(this.newBooking.roomId == 3 || this.newBooking.roomId == 4){
        this.ParticipantService.postParticipant(this.participant).subscribe()
      }
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
