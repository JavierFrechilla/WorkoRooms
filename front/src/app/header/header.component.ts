import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  us: User = {
    id: 0,
    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
  }
  localStorage?: any;
  id?: number;

  constructor(public service: UserService) { }

  
  ngOnInit(): void {
  }

  getUser():void{
    this.localStorage = localStorage.getItem('User');
    this.id = parseInt(this.localStorage);
    this.service.getUser(this.id).subscribe(data =>{
      this.us = data});
    console.log(this.us);
  }

}
