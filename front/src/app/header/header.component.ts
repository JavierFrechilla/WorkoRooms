import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { filter } from 'rxjs/operators';

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
  currentRoute: string;

  constructor(public service: UserService, private router: Router) { }



  ngOnInit(): void {
    if (localStorage.getItem('User') != null && localStorage.getItem('User') != undefined) {
      this.localStorage = localStorage.getItem('User');
      this.id = parseInt(this.localStorage);
      this.service.getUser(this.id).subscribe(data => {
        this.us = data
      });
      console.log(this.us);
    }
    
    this.getRoute();
  }

  logOut(): void {
    localStorage.clear;
  }

  reload(): void {
    window.location.reload();
  }

  getRoute(): any{
    return window.location.href
  }

}



