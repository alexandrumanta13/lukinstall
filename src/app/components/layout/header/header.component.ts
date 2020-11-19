import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void { 
    // if( window.innerWidth <= 800 ) {
    //   console.log(this.detectMob)
    //   this.toggleSubmenu();
    // }
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
      $(this).toggleClass('open');
      $(this).prev('ul').slideToggle(500);
    });
  }

  mobileToggler() {
    (<HTMLElement>document.querySelector('body')).classList.toggle('mobile-menu-visible');
  }

  closeMenu() {

  }

  toggleSubmenu(link) {
    this.mobileToggler();
    
    const links = document.querySelectorAll('.dropdown-btn');
    const submenu = document.querySelectorAll('.submenu');
    
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('open');
    }

    for (let i = 0; i < submenu.length; i++) {
      submenu[i].removeAttribute('style');
    }
    this.router.navigate([link]);
    
  }

  detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
    //return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );

  }



  iScrollPos;
  iCurScrollPos;
  scrollEvent = () => {

    // this.iCurScrollPos = window.scrollTo(0, 0);
    // if (this.iCurScrollPos > this.iScrollPos) {
    //   (<HTMLElement>document.querySelector('.main-header .sticky-header')).style.cssText = "position: fixed, width: 100%, top: -100px";
    // } else {
    //   (<HTMLElement>document.querySelector('.main-header .sticky-header')).style.cssText = "top: 0";
    // }
    // this.iScrollPos = this.iCurScrollPos;

    // console.log(this.iScrollPos);

  }

}
