import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ContactComponent } from './pages/contact/contact.component';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { ThankYouComponent } from "./components/thank-you/thank-you.component";



import { GdprComponent } from './pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { CookiesComponent } from "./pages/cookies/cookies.component";
import { TermsComponent } from "./pages/terms/terms.component";
import { ContabilitateSrlComponent } from './pages/contabilitate-srl/contabilitate-srl.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'Expert conta',
      description: 'Description Meta Tag Content',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'despre-noi', component: AboutComponent,
    data: {
      title: 'servicii contabilitate srl',
      description: 'Oferim servicii de contabilitate srl, financiare si de consultanta intr-o serie de industrii punand la dispozitie toata informatia necesara pentru a prospera.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'servicii-contabilitate-srl', component: ContabilitateSrlComponent,
    data: {
      title: 'Despre noi',
      description: 'Apeleaza la servicii profesionale de curatenie la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.Description Meta Tag Content',
      ogUrl: 'your og url'
    }
  },
  

  {
    path: 'preturi', component: PricesComponent,
    data: {
      title: 'Preturi',
      description: 'Apeleaza la servicii profesionale de curatare mocheta si covor la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'setari-gdpr', component: GdprComponent,
    data: {
      title: 'Setari GDPR',
      description: 'Apeleaza la servicii profesionale de curatare mocheta si covor la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'confidentialitate', component: ConfidentialityComponent,
    data: {
      title: 'Confidentialitate',
      description: 'Apeleaza la servicii profesionale de curatare mocheta si covor la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'setari-cookies', component: CookiesComponent,
    data: {
      title: 'Setari cookies',
      description: 'Apeleaza la servicii profesionale de curatare mocheta si covor la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'termeni-si-conditii', component: TermsComponent,
    data: {
      title: 'Termeni si conditii',
      description: 'Apeleaza la servicii profesionale de curatare mocheta si covor la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      title: 'Contact',
      description: 'Apeleaza la servicii profesionale de curatare mocheta si covor la domiciliu. Suntem o firma de curatenie ce oferim servicii in Bucuresti si Ilfov. Preturi competitive.',
      ogUrl: 'your og url'
    }
  },
  { path: '404', component: NotFoundComponent },

  { path: 'thank-you', component: ThankYouComponent },

  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
