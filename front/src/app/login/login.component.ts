import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lo: User = {
    id: 0,
    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
  }
  notLogged: boolean = false
  logged: number = -1;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  checkUser(): void {
    this.notLogged = false;
    this.userService.checkUser(this.lo.gmail, this.lo.password).subscribe(data =>{
      this.logged = data;
      if(this.logged != -1){
        localStorage.setItem("User", this.logged.toString())
        location.href = "/main";
      }else{
        this.notLogged = true;
      }
    })
  }
}