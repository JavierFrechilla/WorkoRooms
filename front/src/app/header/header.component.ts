import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  currentRoute: string;
  element: any;

  constructor(public service: UserService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('User') != null && localStorage.getItem('User') != undefined) {
      this.localStorage = localStorage.getItem('User');
      this.id = parseInt(this.localStorage);
      this.service.getUser(this.id).subscribe(data => {
        this.us = data
      });
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

  darkMode(): void {
    this.element = document.body;
    this.element.classList.toggle("dark-mode");
  }
}