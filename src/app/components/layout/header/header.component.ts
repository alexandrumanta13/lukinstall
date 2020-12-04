import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggleHeight', [
      state('inactive', style({
        height: '0',
        opacity: '0'
      })),
      state('active', style({
        height: '*',
        opacity: '1',
        display: 'block'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  open: boolean;

  navigationSubState: { [menu: string]: string } = {
    InstalatorBucuresti: 'inactive',
    InstalatorSanitar: 'inactive',
    InstalatiiTermice: 'inactive'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    if (window.innerWidth <= 800) {


    }
  }

  mobileToggler() {
    (<HTMLElement>document.querySelector('body')).classList.toggle('mobile-menu-visible');
  }

  closeMenu() {

  }

  activeLink(event, type, link) {
    console.log(event.target.parentElement)
    console.log(event.target.closest(".dropdown"))
    const current = document.querySelectorAll('.current');
    for (let i = 0; i < current.length; i++) {
      current[i].classList.remove('current');
    }

    if (type === 'parent') {
      event.target.parentElement.classList.add('current');
    } else {
      event.target.closest(".dropdown").classList.add("current")
    }
    this.router.navigate([link]);
    
  }



  navigateSubmenu(link) {
    this.mobileToggler();

    const links = document.querySelectorAll('.dropdown-btn');
    const submenu = document.querySelectorAll('.submenu');


    // for (let i = 0; i < links.length; i++) {
    //   links[i].classList.remove('open');
    // }

    for (let i = 0; i < submenu.length; i++) {
      submenu[i].removeAttribute('style');
    }
    this.router.navigate([link]);

  }

  toggleSubmenu(event, menuName) {
    event.preventDefault();
    this.navigationSubState[menuName] = (this.navigationSubState[menuName] === 'inactive' ? 'active' : 'inactive');
    event.target.classList.toggle('open');
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
