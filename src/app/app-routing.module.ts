import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

import { ContactComponent } from './pages/contact/contact.component';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { ThankYouComponent } from "./components/thank-you/thank-you.component";



import { GdprComponent } from './pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { CookiesComponent } from "./pages/cookies/cookies.component";
import { TermsComponent } from "./pages/terms/terms.component";
import { InstalatorSectorOneComponent } from './pages/instalator-sector-one/instalator-sector-one.component';
import { InstalatorBucurestiComponent } from './pages/instalator-bucuresti/instalator-bucuresti.component';
import { InstalatorSectorSixComponent } from './pages/instalator-sector-six/instalator-sector-six.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'instalator bucuresti si ilfov',
      description: 'Lukinstall - instalator autorizat in Bucuresti si Ilfov',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-bucuresti', component: InstalatorBucurestiComponent,
    data: {
      title: 'instalator bucuresti si ilfov',
      description: 'Instalator termic autorizat pentru instalatii termice in Bucuresti (toate sectoarele) si Ilfov. Intervenim rapid. Oferim garantie.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-sector-1', component: InstalatorSectorOneComponent,
    data: {
      title: 'instalator sector 1',
      description: 'Instalator sector 1. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati pentru orice tip de lucrari in Bucuresti.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-sector-6', component: InstalatorSectorSixComponent,
    data: {
      title: 'instalator sector 6',
      description: 'nstalator sector 6. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati pentru orice tip de lucrari in Bucuresti.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'despre-noi', component: AboutComponent,
    data: {
      title: 'Despre noi',
      description: '',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'setari-gdpr', component: GdprComponent,
    data: {
      title: 'Setari GDPR',
      description: '',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'confidentialitate', component: ConfidentialityComponent,
    data: {
      title: 'Confidentialitate',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'politica-cookies', component: CookiesComponent,
    data: {
      title: 'politica cookies',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'termeni-si-conditii', component: TermsComponent,
    data: {
      title: 'Termeni si conditii',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      title: 'Contact',
      description: '',
      ogUrl: 'your og url'
    }
  },
  { path: '404', component: NotFoundComponent },

  { path: 'mesaj-trimis', component: ThankYouComponent },

  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
