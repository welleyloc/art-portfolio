import { Component, OnInit } from '@angular/core';
import { ZINEIMAGES } from '../../galleryimages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  zineImages = ZINEIMAGES;

  constructor() { }

  ngOnInit() {
  }

  convention1 = 'assets/con-1.jpg';
  convention2 = 'assets/con-2.jpg';
  convention3 = 'assets/con-3.jpg';
  convention4 = 'assets/con-4.jpg';
  convention5 = 'assets/con-5.jpg';
  conventionList = '<p><br>Triad Anime Con (Charlotte, NC)<br>Animazement (Raleigh, NC)<br>Asheville Anime Regional Con (Charlotte, NC)<br>Liberty City Anime Con (New York, NY)<br>Queen City Anime Con (Charlotte, NC)<br>Crunchyroll Expo (San Jose, CA)</p>';
  webtoon = 'assets/comic-splash.jpg';
}
