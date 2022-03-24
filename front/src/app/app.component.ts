import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  //recibo todos los datos en mi pedazodeobjetodelocos

  booking: any = {
    fecha: '',
    room: 0,
    userID: 1,
    id: Guid.create(),
  };

  //participantes seleccionados en el checkbox
  particip: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

}
