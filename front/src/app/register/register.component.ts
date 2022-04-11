import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  us: User = {
    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
  };

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }

  postUser():void{
    this.service.postUser(this.us).subscribe()
    location.href = "/login";
  }
}
