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
    OldSiteSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    CarouselModule 
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
