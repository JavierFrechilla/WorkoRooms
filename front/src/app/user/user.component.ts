import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  objetos?: User[]

  constructor(public UserService: UserService) { }

  ngOnInit(): void {
  }

  // getdataUser():void{
  //   this.UserService.getUsers().subscribe(data=>{this.objetos=data;
  //   console.log(this.objetos);
  // })
  // }

}
