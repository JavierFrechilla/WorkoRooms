import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'
import { style } from '@angular/animations';
import { BubbleController } from 'chart.js';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
public events: any[];
public options: any;

  constructor() { }

  ngOnInit() {
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


  this.events = [
    {title:"Evento 1", start: '2022-04-22', description: "reserva reunion" },  
    {title:"Evento 2", start: new Date().getTime(), description: "evento2"},
    {title:"Evento 2", start: '2022-04-05', description: "evento2"},
    


  


  ]
 
}

}
