import { Component, OnInit } from '@angular/core';
import { Purpose } from './purpose';
import { PurposeService } from './purpose.service';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css']
})
export class PurposeComponent implements OnInit {

  objetosPu?: Purpose[]

  constructor(public purposeService:PurposeService) { }

  ngOnInit(): void {
  }
  getdataPurpose():void{
    this.purposeService.getPurpose().subscribe(data=>{this.objetosPu=data;
    console.log(this.objetosPu);
  })
  }

}
