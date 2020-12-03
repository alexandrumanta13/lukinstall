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
import { InstalatorSectorFiveComponent } from './pages/instalator-sector-five/instalator-sector-five.component';
import { InstalatorSectorFourComponent } from './pages/instalator-sector-four/instalator-sector-four.component';
import { InstalatorSectorThreeComponent } from './pages/instalator-sector-three/instalator-sector-three.component';
import { InstalatorSectorTwoComponent } from './pages/instalator-sector-two/instalator-sector-two.component';
import { InstalatorSanitarComponent } from './pages/instalator-sanitar/instalator-sanitar.component';
import { InstalatiiTermiceComponent } from './pages/instalatii-termice/instalatii-termice.component';
import { InstalatorNonStopComponent } from './pages/instalator-non-stop/instalator-non-stop.component';
import { MontajCentraleTermiceComponent } from './pages/montaj-centrale-termice/montaj-centrale-termice.component';
import { DesfundareCanalizareComponent } from './pages/desfundare-canalizare/desfundare-canalizare.component';
import { DesfundareWcComponent } from './pages/desfundare-wc/desfundare-wc.component';
import { LucrariComponent } from './pages/lucrari/lucrari.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ChiuvetaPotrivitaPentruBaiaTaComponent } from './pages/blog/chiuveta-potrivita-pentru-baia-ta/chiuveta-potrivita-pentru-baia-ta.component';
import { InstalatiaTermicaComponent } from './pages/blog/instalatia-termica/instalatia-termica.component';
import { CumAerisimCalorifereleDinLocuintaComponent } from './pages/blog/cum-aerisim-caloriferele-din-locuinta/cum-aerisim-caloriferele-din-locuinta.component';
import { BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent } from './pages/blog/bateria-de-chiuveta-cu-senzori-avantaje-si-dezavantaje/bateria-de-chiuveta-cu-senzori-avantaje-si-dezavantaje.component';
import { ArticolComponent } from './pages/blog/articol/articol.component';

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
    path: 'instalatii-termice', component: InstalatiiTermiceComponent,
    data: {
      title: 'instalatii termice',
      description: 'Instalator termic autorizat pentru instalatii termice in Bucuresti (toate sectoarele) si Ilfov. Intervenim rapid. Oferim garantie.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-sanitar', component: InstalatorSanitarComponent,
    data: {
      title: 'instalator sanitar',
      description: 'Instalator sanitar Bucurest si Ilfov. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati. Oferim garantie.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'montaj-centrale-termice', component: MontajCentraleTermiceComponent,
    data: {
      title: 'instalator sanitar',
      description: 'Instalator sanitar Bucurest si Ilfov. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati. Oferim garantie.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'desfundare-canalizare', component: DesfundareCanalizareComponent,
    data: {
      title: 'desfundare canalizare',
      description: 'Instalator autorizat pentru desfundare canalizare in Bucuresti (toate sectoarele) si Ilfov. Intervenim rapid. Oferim garantie.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'desfundare-wc', component: DesfundareWcComponent,
    data: {
      title: 'desfundare wc',
      description: 'Instalator autorizat pentru desfundareWC in Bucuresti (toate sectoarele) si Ilfov. Intervenim rapid. Oferim garantie.',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'instalator-non-stop', component: InstalatorNonStopComponent,
    data: {
      title: 'instalator non stop',
      description: 'Cauti un instalator non stop in Bucuresti (toate sectoarele) si Ilfov? Intervenim in maxim 30 de minute. Oferim garantia lucrarii efectuate.',
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
    path: 'instalator-sector-2', component: InstalatorSectorTwoComponent,
    data: {
      title: 'instalator sector 2',
      description: 'Instalator sector 2. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati pentru orice tip de lucrari in Bucuresti.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-sector-3', component: InstalatorSectorThreeComponent,
    data: {
      title: 'instalator sector 3',
      description: 'Instalator sector 3. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati pentru orice tip de lucrari in Bucuresti.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-sector-4', component: InstalatorSectorFourComponent,
    data: {
      title: 'instalator sector 4',
      description: 'Instalator sector 4. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati pentru orice tip de lucrari in Bucuresti.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-sector-5', component: InstalatorSectorFiveComponent,
    data: {
      title: 'instalator sector 5',
      description: 'Instalator sector 5. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati pentru orice tip de lucrari in Bucuresti.',
      ogUrl: 'your og url'
    }
  },

  {
    path: 'instalator-sector-6', component: InstalatorSectorSixComponent,
    data: {
      title: 'instalator sector 6',
      description: 'Instalator sector 6. Servicii complete pentru toata gama de instalatii. Intervenim rapid cu instalatori autorizati pentru orice tip de lucrari in Bucuresti.',
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
    path: 'lucrari', component: LucrariComponent,
    data: {
      title: 'lucrari-instalator-bucuresti',
      description: 'Esti curios ce am lucrat pana acum? Vezi in galeria noastra foto o parte din portofoliul nostru de lucrari instalator Bucuresti.',
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

  {
    path: 'blog', component: BlogComponent,
    data: {
      title: 'Blog',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'blog/articol/:articleLink/:articleLinkID', component: ArticolComponent,
    data: {
      title: 'Blog',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'blog/chiuveta-potrivita-pentru-baia-ta', component: ChiuvetaPotrivitaPentruBaiaTaComponent,
    data: {
      title: 'Blog',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'blog/instalatia-termica', component: InstalatiaTermicaComponent,
    data: {
      title: 'Blog',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'blog/cum-aerisim-caloriferele-din-locuinta', component: CumAerisimCalorifereleDinLocuintaComponent,
    data: {
      title: 'Blog',
      description: '',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'blog/bateria-de-chiuveta-cu-senzori-avantaje-si-dezavantaje', component: BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent,
    data: {
      title: 'Blog',
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
