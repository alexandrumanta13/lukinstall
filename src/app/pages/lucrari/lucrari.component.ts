import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-lucrari',
  templateUrl: './lucrari.component.html',
  styleUrls: ['./lucrari.component.scss']
})
export class LucrariComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '70%',
        height: '800px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-11.jpg',
        medium: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-11.jpg',
        big: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-11.jpg'
      },
      {
        small: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-12_(1).jpg',
        medium: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-12_(1).jpg',
        big: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-12_(1).jpg'
      },
      {
        small: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-13.jpg',
        medium: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-13.jpg',
        big: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-13.jpg'
      },{
        small: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-19_(1).jpg',
        medium: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-19_(1).jpg',
        big: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-19_(1).jpg'
      },      
      {
        small: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-20.jpg',
        medium: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-20.jpg',
        big: '/assets/images/gallery/INSTALATOR-BUCURESTI-INSTALATII-BUCURESTI-INSTALATOR-NON-STOP-20.jpg'
      },
    ];
  }
}