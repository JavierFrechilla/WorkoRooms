import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  user:User ={
    
    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
}
  }

 


