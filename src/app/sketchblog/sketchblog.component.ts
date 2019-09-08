import { Component, OnInit } from '@angular/core';
import { BLOGIMAGES } from '../../galleryimages';

@Component({
  selector: 'app-sketchblog',
  templateUrl: './sketchblog.component.html',
  styleUrls: ['./sketchblog.component.css']
})
export class SketchblogComponent implements OnInit {

  blogImage = BLOGIMAGES;
  
  constructor() { }

  ngOnInit() {
  }

}
