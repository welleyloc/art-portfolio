import { Component, OnInit } from '@angular/core';
import { LOGOS } from '../../galleryimages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    webtoon = LOGOS.filter(item => item.comment == 'webtoon')[0];
    instagram = LOGOS[1];
    twitter = LOGOS[2];

    about = 'OuG is composed of an artist (orange) and writer (glad) for Celestial Wheel. We are nerds 3/4 of the time and artsy for the remaining.'
    follow = 'Subscribe to our webcomic, or follow the artist on Twitter and Instagram for updates! We may have other social media accounts, but we only frequent these recently. For any inquiries, please send us  message on Instagram';
    aboutImage = 'assets/about.jpeg';



  constructor() { }

  ngOnInit() { }

}
