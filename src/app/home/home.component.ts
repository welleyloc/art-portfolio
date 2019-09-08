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

  convention1 = 'https://static.wixstatic.com/media/de7557_3053f7df7331442ebf0a010db09acec9~mv2.jpg/v1/fill/w_1500,h_845,al_c,q_90,usm_0.33_1.00_0.00/de7557_3053f7df7331442ebf0a010db09acec9~mv2.webp';
  convention2 = 'https://static.wixstatic.com/media/de7557_8eb3f1b572784ae9b3900395cacc529e~mv2_d_2159_3023_s_2.jpg/v1/fill/w_760,h_1064,al_c,q_90,usm_0.33_1.00_0.00/de7557_8eb3f1b572784ae9b3900395cacc529e~mv2_d_2159_3023_s_2.webp';
  convention3 = 'https://static.wixstatic.com/media/de7557_43de7a69e27a4dfeae12f4a2a93da0d6~mv2.jpg/v1/fill/w_1200,h_1029,al_c,q_90,usm_0.33_1.00_0.00/de7557_43de7a69e27a4dfeae12f4a2a93da0d6~mv2.webp';
  convention4 = 'https://static.wixstatic.com/media/de7557_245a2d5a2fc740709962ea9ea682acb9~mv2.jpg/v1/fill/w_1125,h_878,al_c,q_90,usm_0.33_1.00_0.00/de7557_245a2d5a2fc740709962ea9ea682acb9~mv2.webp';
  convention5 = 'https://static.wixstatic.com/media/de7557_e8bad707982c4204b53fc2bcb89fc70f~mv2.jpg/v1/fill/w_869,h_1064,al_c,q_90,usm_0.33_1.00_0.00/de7557_e8bad707982c4204b53fc2bcb89fc70f~mv2.webp';
  convention6 = 'https://static.wixstatic.com/media/de7557_d5787a235e754cf4b3509e57d711ce89~mv2.jpg/v1/fill/w_1339,h_959,al_c,q_90,usm_0.33_1.00_0.00/de7557_d5787a235e754cf4b3509e57d711ce89~mv2.webp';
  conventionList = '<p><br>Triad Anime Con (Charlotte, NC)<br>Animazement (Raleigh, NC)<br>Asheville Anime Regional Con (Charlotte, NC)<br>Liberty City Anime Con (New York, NY)<br>Queen City Anime Con (Charlotte, NC)<br>Crunchyroll Expo (San Jose, CA)</p>';
  webtoon1 = 'https://static.wixstatic.com/media/de7557_5a9e0a5ecc8b4bc2b98854f6913f811a~mv2.jpg/v1/fill/w_358,h_490,al_c,q_80,usm_0.66_1.00_0.01/Bing.webp';
  webtoon2 = 'https://static.wixstatic.com/media/de7557_d22fc5b690e1447cbf3a2d88a0050f6e~mv2_d_1837_2352_s_2.jpg/v1/fill/w_360,h_450,al_c,q_80,usm_0.66_1.00_0.01/bing%20clothes.webp';
}
