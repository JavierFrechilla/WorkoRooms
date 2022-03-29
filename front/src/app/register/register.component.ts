import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService) { }

  newUser: User = {
    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
  };

  ngOnInit(): void {
  }

  postUser():void{
    this.service.postUser(this.newUser).subscribe()
  }
}
