import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'art-porfolio';
  
  constructor(){
  }

  OnInit() {
  }
  
  footText = '(c) 2019 orangeandglad. Please do not reuse images without permission.'

}
