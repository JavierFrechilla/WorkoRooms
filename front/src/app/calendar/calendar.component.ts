import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'
import { dateToUtcArray } from '@fullcalendar/core/datelib/marker';
import { DtocalendarService } from '../dtocalendar/dtocalendar.service';
import { Dtocalendar } from '../dtocalendar/dtocalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public events: any[] = [];
  public options: any;
  public arrayPeio: any[] = [];  

  constructor(public CalendarService: DtocalendarService) { }

  calendar?: Dtocalendar[];

  ngOnInit() {
    this.getBookings()

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
  }

  getBookings(): void {
    this.CalendarService.getData().subscribe(data => {
      this.calendar = data;
      console.log(this.calendar);
      this.calendar.forEach(cal => {
        this.arrayPeio.push({ title: cal.userName + " / " + cal.purposeName, start: cal.dateIn, end: cal.dateOut, color: cal.roomColor })
      });
      this.events = this.arrayPeio
    });
  }
}
