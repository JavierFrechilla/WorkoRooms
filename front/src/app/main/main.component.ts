import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { dateTimeLocale } from '@mobiscroll/angular/dist/js/core/util/datetime';
import { Booking } from '../booking/booking';
import { BookingService } from '../booking/booking.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { PurposeService } from '../purpose/purpose.service';
import { Purpose } from '../purpose/purpose';
import { RoomService } from '../room/room.service';
import { Room } from '../room/room';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userId: number = -1;

  constructor(public userService: UserService, public bookingService: BookingService, public purposeService: PurposeService, public roomService: RoomService) { }
  purposeOb?= []
  roomOb?= []
  bookings = []
  booking: Booking = {
    id: 0,
    userId: 0,
    purposeId: 0,
    roomId: 0,
    dateIn: new Date(),
    dateOut: new Date(),
    participants: [],

  }
  Room: Room = {
    id: 0,
    name: '',
    photo: '',
    capacity: 0,
    state: true,
    color: '',
  }
  today: any = new Date().toISOString()

  user: User = {

    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
  }
  purpose: Purpose = {
    id: 1,
    name: '',
    icon: '',
  }
  service: any

  ngOnInit(): void {


    if (localStorage.getItem("User")) {
      this.userId = JSON.parse(JSON.stringify(localStorage.getItem("User")))
      this.userService.getUser(this.userId).subscribe(data => {

        this.user = data;
        // console.log(this.user);
      })
      console.log(this.today)
    }

    this.getdataPurpose();
    this.getBookings();
    this.getdataRoom();

  }

  logOut(): void {
    localStorage.clear();
  }
  getdataRoom(): void {
    this.roomService.getRoom().subscribe(data => {
      this.roomOb = data;
      // console.log(this.roomOb);
    })
  }
  getdataPurpose(): void {

    this.purposeService.getPurpose().subscribe(data => {
      this.purposeOb = data;
      // console.log(this.purposeOb);
    })
  }


  getBookings(): void {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data;
      console.log(this.bookings);
    })
  }


}






