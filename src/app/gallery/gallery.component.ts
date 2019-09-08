import { Component, OnInit } from '@angular/core';
import { FANARTIMAGES, ORIGINALIMAGES, MERCHIMAGES } from '../../galleryimages';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    originalImages = ORIGINALIMAGES;
    fanImages = FANARTIMAGES;
    merchImages = MERCHIMAGES;

    constructor() {}

    ngOnInit() {}


  modalUrl(url: string, myType: string) {

    if (myType == 'ori') {
      let element: HTMLImageElement = document.getElementById('selectedOriImage') as HTMLImageElement;
      element.src = url;
      console.log('1');
    }
    else if (myType == 'fan') {
      let element: HTMLImageElement = document.getElementById('selectedFanImage') as HTMLImageElement;
      element.src = url;
      console.log('2');

    } 
    else if (myType == 'merch') {
    let element: HTMLImageElement = document.getElementById('selectedMerchImage') as HTMLImageElement;
    element.src = url;
    console.log('3');

    }

    console.log('Click!');
    console.log(url);
    
  }
}
