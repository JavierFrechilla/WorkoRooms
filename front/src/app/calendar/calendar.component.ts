import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'
import { BookingService } from '../booking/booking.service';
import { Booking } from '../booking/booking';
import { dateToUtcArray } from '@fullcalendar/core/datelib/marker';
import { RoomComponent } from '../room/room.component';

import { Room } from '../room/room';
import { RoomService } from '../room/room.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
public events: any[];
public options: any;

  constructor(public Bookingservice: BookingService, public RoomService: RoomService) { }

  bookings?: Booking[];
  room?:Room;

  ngOnInit() {
    this.getBookings()
    
    
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaulDate: new Date(),
      locale: esLocale,
      header:{
        left: 'prev,next',
        center:'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'

      },
      editable: true
      

    }


  // this.events = [
  //    {title:"reunion", start: '2022-04-06T12:30:00',end:'2022-04-06T13:30:00', description: "reserva reunion", backgroundColor:'#FB088C', display:'inverse-background'}, 
  //    {title:"reunion", start: '2022-04-06T17:30:00',end:'2022-04-06T18:30:00', description: "reserva reunion", backgroundColor:'#26D13F ', display:'inverse-background'},
  //   {title:"Evento 2", start: new Date().getTime(), description: "evento2", backgroundColor:'#26D13F '},
  //   {title:"Evento 2", start: '2022-04-05T17:30:00',end:'2022-04-05T18:30:00', description: "evento2",backgroundColor:'#FFCD04 '},
  //  { title: 'Teste1',
  //   start: new Date(),
  //   allDay: false,
  //   editable: false,
  //   backgroundColor: '#SomeColor'}

  


  // ]
  
 
}

  getBookings():void{
    this.Bookingservice.getBookings().subscribe(data=>{this.bookings=data;
    console.log(this.bookings);
    this.bookings.forEach(booking => {
      
    this.events = [
      {title: booking.userId+""+booking.purposeId, start: booking.dateIn, end:booking.dateOut, description: booking.purposeId, },       
      // {title:"Evento 2", start: new Date().getTime(), description: "evento2"},
      // {title:"Evento 2", start: '2022-04-05', description: "evento2"},
    ]
     });
    })
  }
}
