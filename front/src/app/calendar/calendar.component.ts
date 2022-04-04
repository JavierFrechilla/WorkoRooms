import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'
import { BookingService } from '../booking/booking.service';
import { Booking } from '../booking/booking';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
public events: any[];
public options: any;

  constructor(public Bookingservice: BookingService) { }

  bookings?: Booking[];

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
      editable: false
      

    }


  
    
}

  getBookings():void{
    this.Bookingservice.getBookings().subscribe(data=>{this.bookings=data;
    console.log(this.bookings);
    this.bookings.forEach(booking => {
      
    this.events = [
      {title: booking.roomId, start: booking.dateIn, description: booking.purposeId },       
      // {title:"Evento 2", start: new Date().getTime(), description: "evento2"},
      // {title:"Evento 2", start: '2022-04-05', description: "evento2"},
    ]
     });
    })
  }
}
