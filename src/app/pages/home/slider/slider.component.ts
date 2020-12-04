import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: false,
    margin: 0,
    nav: true,
    autoHeight: true,
    autoplay: false,
    autoplayTimeout: 7000,
    navText: ['<span class="flaticon-back-1"></span>', '<span class="flaticon-arrow-pointing-to-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      1024: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  }



  ngOnInit(): void {
    
      $('.main-slider-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: false,
        margin: 0,
        nav: true,
        autoHeight: true,
        autoplay: false,
        autoplayTimeout: 7000,
        navText: ['<span class="flaticon-back-1"></span>', '<span class="flaticon-arrow-pointing-to-right"></span>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 1
          },
          1024: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      });
    
  }

}
