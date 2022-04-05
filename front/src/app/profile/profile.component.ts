import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public service: UserService) { }

  localStorage?: any;
  id?: number;
  us?: User;

  refresh: boolean = false;

  ngOnInit(): void {
    this.getUser()
  }

  getUser():void{
    this.localStorage = localStorage.getItem('User');
    this.id = parseInt(this.localStorage);
    this.service.getUser(this.id).subscribe(data =>{
      this.us = data});
    console.log(this.us);
  }

  updateUser(us: User):void{
    if (this.us != undefined && us?.id != undefined) {
      this.us = us
      this.service.updateUser(this.us).subscribe()
      console.log(this.us)
      this.refresh = true;
    }
  }

  deleteUser(id: number): void{
    if(id != undefined){
      this.service.deleteUser(id).subscribe();
    }
  }

  logOut(): void {
    localStorage.clear();
    location.href = "/"
  }
}