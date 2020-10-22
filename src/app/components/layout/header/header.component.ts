import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
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
