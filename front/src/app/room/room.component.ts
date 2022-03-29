import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  objetos?: Room[]

  constructor(public RoomService: RoomService) { }

  ngOnInit(): void {
  }

  getdataRoom():void{
    this.RoomService.getRoom().subscribe(data=>{this.objetos=data;
    console.log(this.objetos);
  })
  }
    
}
