import { Component, OnInit } from '@angular/core';
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

  constructor(public service: BookingService, public UserService: UserService, public RoomService: RoomService, public PurposeService: PurposeService) { }

  newBooking: Booking = {
    userId: 0,
    purposeId: 0,
    roomId: 0,
    dateIn: new Date(),
    dateOut: new Date(),
    participants: ""
  };
  participants: string[] = [];
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
    if(localStorage.getItem("User")){
      this.userId = JSON.parse(JSON.stringify(localStorage.getItem("User")))
    }
  }

  ngOnDestroy(): void{
    this.backToscroll()
  }

  postBooking():void{
    this.newBooking.userId = this.userId;
    if(this.newBooking.roomId == 1||this.newBooking.roomId == 2){
      let array = Object.keys(this.participants).filter((key)=> {return this.participants[key]});
      array.forEach(element => {
        this.newBooking.participants+=element+","
      });
    }
    else{
      this.newBooking.participants = this.participants[0]
    }
    this.service.postBooking(this.newBooking).subscribe()
    setTimeout(function(){
      window.location.reload();
    }, 1000);
  }

  getdataUser():void{
    this.UserService.getUsers().subscribe(data=>{this.userOb=data;
    })
  }

  getdataRoom():void{
    this.RoomService.getRoom().subscribe(data=>{this.roomOb=data;
    })
  }

  getdataPurpose():void{
    this.PurposeService.getPurpose().subscribe(data=>{this.purposeOb=data;
    })
  }

  highLight(): void{
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