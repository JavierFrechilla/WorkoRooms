import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }
 

  ngOnInit(): void {
    this.changeScroll()
  }
  
  ngOnDestroy(): void{
    this.backToscroll()
  }
  changeScroll(){
    const body = document.querySelector("body")
    body?.classList.add("noScroll")
  }

  backToscroll(){
    const body = document.querySelector("body")
    body?.classList.remove("noScroll")
  }

}
