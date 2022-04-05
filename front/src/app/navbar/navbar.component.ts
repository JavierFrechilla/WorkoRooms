import { Component, OnInit } from '@angular/core';
import { PurposeService } from '../purpose/purpose.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  // localStorage?: any;

  ngOnInit(): void {
    
  }

  // showNavbar(): void{
  //   this.localStorage = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("User"))))
  // }

}
