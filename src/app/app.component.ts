import { Component } from '@angular/core';
import { SEOServiceService } from './seoservice.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _seoService: SEOServiceService
  ) { }

  menu: boolean = false;


  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
      .subscribe((event) => {
        this._seoService.updateTitle(event['title']);
        this._seoService.updateOgUrl(event['ogUrl']);
        //Updating Description tag dynamically with title
        this._seoService.updateDescription(event['title'] + event['description'])
      });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      const hover = document.querySelector('.nav-dropdown-toggle');
      const dropdown = document.querySelector('.dropdown-list');
      hover.classList.remove('w--open');
      dropdown.classList.remove('w--open');
      this.menu = false;
      window.scrollTo(0, 0);
    });
  }

  toggleMenu() {
    this.menu = !this.menu;
  }
}
