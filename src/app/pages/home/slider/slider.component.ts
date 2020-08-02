import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sliderImage = document.querySelector('.img-hero2--person');
    const sliderBg = document.querySelector('.img-hero2--bg');
    const sliderText = document.querySelector('.text');
    setTimeout(() => {
      sliderImage.classList.add('loaded');
    }, 300);
    setTimeout(() => {
      sliderBg.classList.add('loaded');
    }, 500);
    setTimeout(() => {
      sliderText.classList.add('loaded');
    }, 800);
   
  }

}
