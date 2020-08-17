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
import { SalarizareResurseUmaneComponent } from './pages/salarizare-resurse-umane/salarizare-resurse-umane.component';
import { ServiciiConsultantaFiscalaContabilaComponent } from './pages/servicii-consultanta-fiscala-contabila/servicii-consultanta-fiscala-contabila.component';
import { ServiciiContabilitatePfaIiIfComponent } from './pages/servicii-contabilitate-pfa-ii-if/servicii-contabilitate-pfa-ii-if.component';


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
      title: 'Despre noi',
      description: 'Oferim servicii de contabilitate srl, financiare si de consultanta intr-o serie de industrii punand la dispozitie toata informatia necesara pentru a prospera.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'servicii-contabilitate-srl', component: ContabilitateSrlComponent,
    data: {
      title: 'servicii contabilitate srl',
      description: 'Oferim servicii de contabilitate srl, financiare si de consultanta intr-o serie de industrii punand la dispozitie toata informatia necesara pentru a prospera.',
      ogUrl: 'your og url'
    }
  },
  
  {
    path: 'servicii-salarizare-resurse-umane', component: SalarizareResurseUmaneComponent,
    data: {
      title: 'servicii salarizare resurse umane',
      description: ' Echipa noastra va ajuta sa profitați de oportunitatile care exista, oferind solutii potrivite de salarizare si resurse umane in Bucuresti si Ilfov.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'servicii-consultanta-fiscala-contabila', component: ServiciiConsultantaFiscalaContabilaComponent,
    data: {
      title: 'consultanta fiscala',
      description: 'Ca antreprenor, este destul de complicat sa tii pasul cu schimbarile la nivel de legislatie, de aceea recomandam servicii de consultanta fiscala in Bucuresti si Ilfov.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'servicii-contabilitate-pfa-ii-if', component: ServiciiContabilitatePfaIiIfComponent,
    data: {
      title: 'servicii contabilitate PFA',
      description: 'Serviciile noastre de contabilitate pfa sunt bazate pe calitate si experienta, de aceea costurile sunt avantajoase, transparente si justificate.',
      ogUrl: 'your og url'
    }
  },

  


  {
    path: 'preturi', component: PricesComponent,
    data: {
      title: 'Preturi',
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
