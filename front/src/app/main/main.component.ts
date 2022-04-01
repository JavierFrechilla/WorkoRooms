import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userId: number = -1;

  constructor(public userService: UserService) { }
  
  
  
  user:User ={
    
    name: '',
    surname: '',
    photo: '',
    gmail: '',
    password: '',
    role: '',
}

ngOnInit(): void {
  if(localStorage.getItem("User")){
    this.userId = JSON.parse(JSON.stringify(localStorage.getItem("User")))
    this.userService.getUser(this.userId).subscribe(data=>{
      this.user = data;
      console.log(this.user);
    })
  }
}

logOut(): void{
  localStorage.clear();
}

  }
  

 


