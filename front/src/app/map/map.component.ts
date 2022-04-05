import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  @Input() highLightV: number; // decorate the property with @Input()

  constructor() { }

  // ngOnInit(): void {
  //   console.log(this.item)
  // }

  ngOnChanges(): void {
    // console.log(this.highLightV)
  }
  
}

