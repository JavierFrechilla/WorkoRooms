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
import { DtocalendarService } from '../dtocalendar/dtocalendar.service';
import { Dtocalendar } from '../dtocalendar/dtocalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userId: number = -1;

  constructor(public userService: UserService, public bookingService: BookingService, public purposeService: PurposeService, public roomService: RoomService, public CalendarService: DtocalendarService) { }
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
  
  calendar?: Dtocalendar[];

  public events: any[] = [];
  public options: any;
  public arrayPeio: any[] = [];  

  

  ngOnInit(): void {

    this.changeScroll()
    
    this.getdataBookings()

    this.options = {
        
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaulDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false,
    }

    if (localStorage.getItem("User")) {
      this.userId = JSON.parse(JSON.stringify(localStorage.getItem("User")))
      this.userService.getUser(this.userId).subscribe(data => {

        this.user = data;
        // console.log(this.user);
      })
      
    }

    this.getdataPurpose();
    this.getBookings();
    this.getdataRoom();

  }

  ngOnDestroy(): void{
    this.backToscroll()
  }

  logOut(): void {
    localStorage.clear();
  }
  getdataRoom(): void {
    this.roomService.getRoom().subscribe(data => {
      this.roomOb = data;
      
    })
  }
  getdataPurpose(): void {

    this.purposeService.getPurpose().subscribe(data => {
      this.purposeOb = data;
      
    })
  }

  getdataBookings(): void {
    this.CalendarService.getData().subscribe(data => {
      this.calendar = data;
      
      this.calendar.forEach(cal => {
        this.arrayPeio.push({ title: cal.userName + " / " + cal.purposeName, start: cal.dateIn, end: cal.dateOut, color: cal.roomColor })
      });
      this.events = this.arrayPeio
    });
  }


  getBookings(): void {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data;
      
    })
  }

  deleteBooking(booking: Booking): void{
    debugger;
    if (booking.id != undefined)
    {
      this.bookingService.deleteBooking(booking.id).subscribe();
    }
    setTimeout(function(){
      window.location.reload();
   }, 3000);
  }

  changeScroll(){
    const body = document.querySelector("body")
    body?.classList.add("noScroll")
  }

  backToscroll(){
    const body = document.querySelector("body")
    body?.classList.remove("noScroll")
  }

  setItemBooking(booking: Booking): void{
    localStorage.setItem("Booking", JSON.stringify(booking))
  }
}






