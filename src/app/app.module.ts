import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';


import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { ContactComponent } from './pages/contact/contact.component';
import { GdprComponent } from './pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { ServicesComponent } from './pages/home/services/services.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OldSiteSectionComponent } from './pages/home/old-site-section/old-site-section.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InstalatorSectorOneComponent } from './pages/instalator-sector-one/instalator-sector-one.component';
import { InstalatorSectorTwoComponent } from './pages/instalator-sector-two/instalator-sector-two.component';
import { InstalatorBucurestiComponent } from './pages/instalator-bucuresti/instalator-bucuresti.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { InstalatorSectorSixComponent } from './pages/instalator-sector-six/instalator-sector-six.component';
import { InstalatorSectorFiveComponent } from './pages/instalator-sector-five/instalator-sector-five.component';
import { InstalatorSectorFourComponent } from './pages/instalator-sector-four/instalator-sector-four.component';
import { InstalatorSectorThreeComponent } from './pages/instalator-sector-three/instalator-sector-three.component';
import { InstalatorSanitarComponent } from './pages/instalator-sanitar/instalator-sanitar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InstalatiiTermiceComponent } from './pages/instalatii-termice/instalatii-termice.component';
import { InstalatorNonStopComponent } from './pages/instalator-non-stop/instalator-non-stop.component';
import { MontajCentraleTermiceComponent } from './pages/montaj-centrale-termice/montaj-centrale-termice.component';
import { DesfundareCanalizareComponent } from './pages/desfundare-canalizare/desfundare-canalizare.component';
import { DesfundareWcComponent } from './pages/desfundare-wc/desfundare-wc.component';
import { LucrariComponent } from './pages/lucrari/lucrari.component';

import {NgxGalleryModule} from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    NotFoundComponent,

    ContactComponent,
    GdprComponent,
    ConfidentialityComponent,
    CookiesComponent,
    TermsComponent,
    ThankYouComponent,
    WhatsappComponent,
    SliderComponent,
    ServicesComponent,
    OldSiteSectionComponent,
    InstalatorSectorOneComponent,
    InstalatorSectorTwoComponent,
    InstalatorBucurestiComponent,
    FeatureSectionComponent,
    InstalatorSectorSixComponent,
    InstalatorSectorFiveComponent,
    InstalatorSectorFourComponent,
    InstalatorSectorThreeComponent,
    InstalatorSanitarComponent,
    SidebarComponent,
    InstalatiiTermiceComponent,
    InstalatorNonStopComponent,
    MontajCentraleTermiceComponent,
    DesfundareCanalizareComponent,
    DesfundareWcComponent,
    LucrariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    CarouselModule,
    NgxGalleryModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
