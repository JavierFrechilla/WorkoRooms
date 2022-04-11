import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking/booking';
import { BookingService } from '../booking/booking.service';
import { Room } from '../room/room';
import { RoomService } from '../room/room.service';
import { Purpose } from '../purpose/purpose';
import { PurposeService } from '../purpose/purpose.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public service: BookingService, public RoomService: RoomService, public PurposeService: PurposeService) { }

  newBooking: Booking;
  localStorage?: any;
  roomOb?: Room[];
  purposeOb?: Purpose[];
  today: any = new Date().toISOString().substring(0, 16)
  highLightV: number = -1;
  
  ngOnInit(): void {
    if (localStorage.getItem('Booking') != null && localStorage.getItem('Booking') != undefined) {
      this.localStorage = localStorage.getItem('Booking');
      this.newBooking = JSON.parse(this.localStorage);
    }
    this.getdataPurpose()
    this.getdataRoom()   
  }

  updateBooking(booking: Booking):void{
    if (booking != undefined) {
      this.newBooking = booking
      this.service.updateBooking(this.newBooking).subscribe()
    }
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
}