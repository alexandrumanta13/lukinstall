import { Component } from '@angular/core';
import { SEOServiceService } from './seoservice.service';
import {
  ActivatedRoute,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { IpServiceService } from './ip-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trigger, state, transition, style, animate } from '@angular/animations';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('1000ms')),
    ])
  ],
})


export class AppComponent {

  ipAddress: string;
  visiblityState = 'shown';


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _seoService: SEOServiceService,
    private ip: IpServiceService,
    private _httpClient: HttpClient
  ) {

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.visiblityState = 'shown';
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.visiblityState = 'hidden';
          setTimeout(() => {
            $('.preloader').delay(200).fadeOut(500);
      
          }, 1000);
          break;
        }
        default: {
          break;
        }
      }
    });

  }

  

  getIP() {
    this.ip.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      this.saveIP(res.ip);
    });

  }

  saveIP(ip) {
    console.log(ip)
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = { headers: headers };

    this._httpClient.post('https://www.lukinstall.ro/data/save-ip.php', { "ip": ip }, options)
      .subscribe((response: any) => {
        console.log(response);
      });

  }

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
      window.scrollTo(0, 0);
    });



  }

  ngAfterViewInit() {
    this.getIP();
    
  }


}
