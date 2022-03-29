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
    id: 0,
    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
  };

  ngOnInit(): void {
  }

  postLoadout():void{
    this.service.postUser(this.newUser).subscribe()
  }
}
