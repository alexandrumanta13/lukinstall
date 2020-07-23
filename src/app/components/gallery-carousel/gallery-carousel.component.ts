import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss']
})
export class GalleryCarouselComponent implements OnInit {

  imageObject: Array<object> = [{
    image: '/assets/images/portfolio/1.-curatare-canapele.jpg',
    thumbImage: '/assets/images/portfolio/1.-curatare-canapele.jpg',
    alt: 'Curatare canapele',
    
  }, {
    image: '/assets/images/portfolio/2.-curatare-canapele.jpg',
    thumbImage: '/assets/images/portfolio/2.-curatare-canapele.jpg',
    alt: 'Curatare canapele',
  }, {
    image: '/assets/images/portfolio/3-curatare-podea-dura.jpg',
    thumbImage: '/assets/images/portfolio/3-curatare-podea-dura.jpg',
    alt: 'Curatare podea dura',
  }, {
    image: '/assets/images/portfolio/4.-curatare-podea-dura.jpg',
    thumbImage: '/assets/images/portfolio/4.-curatare-podea-dura.jpg',
    alt: 'Curatare podea dura',
  }, {
    image: '/assets/images/portfolio/5.-curatare-cuptor-horeca.jpg',
    thumbImage: '/assets/images/portfolio/5.-curatare-cuptor-horeca.jpg',
    alt: 'Curatare cuptor horeca',
  }, {
    image: '/assets/images/portfolio/6.-curatare-cuptor.jpg',
    thumbImage: '/assets/images/portfolio/6.-curatare-cuptor.jpg',
    alt: 'Curatare cuptor',
  }, {
    image: '/assets/images/portfolio/7.-curatare-podea.jpg',
    thumbImage: '/assets/images/portfolio/7.-curatare-podea.jpg',
    alt: 'Curatare podea',
  }, {
    image: '/assets/images/portfolio/8.-spalare-geamuri-bucuresti.jpg',
    thumbImage: '/assets/images/portfolio/8.-spalare-geamuri-bucuresti.jpg',
    alt: 'spalare geamuri bucuresti',
  }, {
    image: '/assets/images/portfolio/9.-detailing-auto-bucuresti.jpg',
    thumbImage: '/assets/images/portfolio/9.-detailing-auto-bucuresti.jpg',
    alt: 'detailing auto bucuresti',
  }, {
    image: '/assets/images/portfolio/10.-curatare-tapiterie-auto-bucuresti.jpg',
    thumbImage: '/assets/images/portfolio/10.-curatare-tapiterie-auto-bucuresti.jpg',
    alt: 'Curatare tapiterie auto bucuresti',
  }, {
    image: '/assets/images/portfolio/11.-curatare-tapiterie-camion.jpg',
    thumbImage: '/assets/images/portfolio/11.-curatare-tapiterie-camion.jpg',
    alt: 'Curatare tapiterie camion',
  }
  , {
    image: '/assets/images/portfolio/12.-curatare-tapiterie-auto.jpg',
    thumbImage: '/assets/images/portfolio/12.-curatare-tapiterie-auto.jpg',
    alt: 'Curatare tapiterie auto',
  }
  , {
    image: '/assets/images/portfolio/13.-curatare-fotoliu-piele.jpg',
    thumbImage: '/assets/images/portfolio/13.-curatare-fotoliu-piele.jpg',
    alt: 'Curatare fotoliu piele',
  }
  , {
    image: '/assets/images/portfolio/14.-curatare-tapiterie-auto.jpg',
    thumbImage: '/assets/images/portfolio/14.-curatare-tapiterie-auto.jpg',
    alt: 'Curatare tapiterie auto',
  }
  , {
    image: '/assets/images/portfolio/15-curatenie-dupa-constructor.jpg',
    thumbImage: '/assets/images/portfolio/15-curatenie-dupa-constructor.jpg',
    alt: 'curatenie dupa constructor',
  }
  , {
    image: '/assets/images/portfolio/16.-curatare-spatii-comerciale.jpg',
    thumbImage: '/assets/images/portfolio/16.-curatare-spatii-comerciale.jpg',
    alt: 'Curatare spatii comerciale',
  }
  , {
    image: '/assets/images/portfolio/17.-detailing-auto.jpg',
    thumbImage: '/assets/images/portfolio/17.-detailing-auto.jpg',
    alt: 'Detailing auto',
  }
  , {
    image: '/assets/images/portfolio/18.-curatenie-apartament.jpg',
    thumbImage: '/assets/images/portfolio/18.-curatenie-apartament.jpg',
    alt: 'Curatenie apartament',
  }
  , {
    image: '/assets/images/portfolio/19.-spalare-geamuri-la-inaltime.jpg',
    thumbImage: '/assets/images/portfolio/19.-spalare-geamuri-la-inaltime.jpg',
    alt: 'spalare geamuri la inaltime',
  }
  , {
    image: '/assets/images/portfolio/20.-curatare-pardoseala-dura.jpg',
    thumbImage: '/assets/images/portfolio/20.-curatare-pardoseala-dura.jpg',
    alt: 'Curatare pardoseala dura',
  }
  ];
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}