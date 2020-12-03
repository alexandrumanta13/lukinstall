import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  data: any[];
  p: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        image: "/assets/images/blog/baterie_baie-960x600.jpg",
        link: "/blog/articol/chiuveta-potrivita-pentru-baia-ta/1",
        title: "Chiuveta potrivită pentru baia ta",
        description: "Cum alegem chiuveta potrivită pentru baia ta? In alegerea unei chiuvete pentru baie este esențial ca aceasta să fie funcțională și adaptată nevoilor locuitorilor casei. Achiziția chiuvetei depinde și de tipul de proiect aflat în desfășurare. În cazul reamenajării băii, chiuveta, accesoriile necesare montării [...]"
      },
      {
        id: 2,
        image: "/assets/images/blog/tevi-960x528.jpg",
        link: "/blog/articol/instalatia-termica/2",
        title: "Instalatia Termica – Trasare si masurare tevi",
        description: "Pentru trasarea corecta a circuitului termic va trebui sa respectam cativa pasi foarte simpli dar foarte importanti pentru functionarea corecta a instalatiei termice.Dacă locuința este nouă, circuitul trebuie atent realizat, înainte de a începe lucrul.Echipa de instalatori Luk Install Bucuresti vine in [...]"
      },
      {
        id: 3,
        image: "/assets/images/blog/calorifere-960x600.jpg",
        link: "/blog/articol/cum-aerisim-caloriferele-din-locuinta/3",
        title: "Cum aerisim caloriferele din locuinta",
        description: "Cum aerisim caloriferele din locuinta? Pregatirea caloriferelor pentru sezonul rece devine prioritara atunci cand dorim sa avem caldura in locuinta. In multe situatii caloriferele nu se incalzesc corespunzator mai precis vor fi doar caldute si reci in partea de jos. Intrebari frecvente? – Caloriferu [...]"
      },
      {
        id: 4,
        image: "/assets/images/blog/baterie_cu_senzor-960x400.jpg",
        link: "/blog/articol/bateria-de-chiuveta-cu-senzori-avantaje-si-dezavantaje/4",
        title: "Bateria de chiuveta cu senzori – avantaje si dezavantaje",
        description: "Bateria de chiuveta cu senzori o optiune moderna pentru consumul de apa din cadrul unei locuinte. Aceste tpuri de baterii se regasesc cu precadere in toaletele mall-urilor, cinematografelor sau ale marilor lanturi de restaurante tip fast-food. Bateria de chiuveta cu senzori – principiu de [...]"
      },
      {
        id: 5,
        image: "/assets/images/blog/cupru-960x400.jpg",
        link: "/blog/articol/bateria-de-chiuveta-cu-senzori-avantaje-si-dezavantaje/5",
        title: "Instalatii de incalzire – Instalatiile realizate cu tevi de cupru",
        description: "Instalatii de incalzire profesionale realizate in totalitate cu tevi de cupru. In mod tradiţional, ţevile de cupru sunt utilizate la sistemele de încălzire. Cu ajutoprul lor, pot fi executate instalatii de incalzire cu radiatoare sau încălzire de suprafaţă (pardoseală şi perete). Performanţa cuprului a [...]"
      },
      {
        id: 6,
        image: "/assets/images/blog/conducte_ppr-960x400.jpg",
        link: "/blog/articol/instalatia-sanitara-din-interiorul-unei-cladiri/6",
        title: "Instalatia sanitara din interiorul unei cladiri",
        description: "Instalatia sanitara reprezinta elementul cheie in buna functionare a tuturor elementeleor sanitare. In cadrul acestui articol vom analiza posibilitatea de a avea o instalatie montata in cel mai corect mod pentru o functionare corecta. Instalatia sanitara sfaturi utile in montare configurarea traseelor Acest lucru [...]"
      },
      {
        id: 7,
        image: "/assets/images/blog/conducte.jpg",
        link: "/blog/articol/conducte-pentru-instalatiile-sanitare-proprietati-tehnice/7",
        title: "Conducte pentru instalatiile sanitare – Proprietati tehnice",
        description: "In cadrul acestui articol vom analiza care sunt cele mai bune conducte recomandate in realizarea instalatiilor sanitare si termice. Folosirea celor mai bune materiale in constructia unei instalatii noi, va garanta siguranta caminului dumneavoastra. Conducte in instalatiile sanitare – Conductele sunt elemente ce se [...]"
      },
      {
        id: 8,
        image: "/assets/images/blog/chiuvete-800x400.jpg",
        link: "/blog/articol/cum-alegem-chiuveta-la-bucatarie-sfatul-instalatorului/8",
        title: "Cum alegem chiuveta la bucatarie – Sfatul instalatorului",
        description: "Cum alegem chiuveta potrivita pentru bucatarie?! Chiuveta de bucatarie reprezinta unul din elementele indispensabile din bucatarie si are o importanta deosebita atunci cand folosim bucataria intens. In comert se regasesc diferite modele de chiuvete iar alegerea celor mai bune dintre ele va apartine in [...]"
      },
      {
        id: 9,
        image: "/assets/images/blog/calorifere_colorate-800x400.jpg",
        link: "/blog/articol/ce-calorifere-sa-alegem-pentru-casa-sfaturi-utile/9",
        title: "Ce calorifere sa alegem pentru casa – Sfaturi utile",
        description: "Ce calorifere sa alegem pentru casa? Cu siguranta aceasta intrebare este pe buzele fiecaruia atunci cand vine vorba sa alegem un calorifer pentru camera sau casa noastra. In comert se regasesc o multitudine de modele ce au la baza un design personalizat in functie [...]"
      },
      {
        id: 10,
        image: "/assets/images/blog/canale-800x400.jpg",
        link: "/blog/articol/canalizarea-exterioara-sfaturi-utile-in-realizarea-canalizarii/10",
        title: "Canalizarea exterioara – Sfaturi utile in realizarea canalizarii",
        description: "Canalizarea exterioara devine foarte importanta pentru o locuinta si are acelasi raport tehnic cu, canalizarea interioara. Realizata corect canalizarea exterioara va sporii confortul caminului dumneavoastra. Sfaturi pentru realizarea canalizarii – Traseul optim al canalizarii In realizarea unei canalizari catre o fosa sau catre un [...]"
      },
      {
        id: 11,
        image: "/assets/images/blog/cabine_dus-800x400.jpg",
        link: "/blog/articol/cele-mai-bune-cabine-de-dus/11",
        title: "Cele mai bune cabine de dus",
        description: "Cum alegem o cabina de dus Buna Vom analiza in cadrul acestui articol cum putem face o alegere buna atunci cand dorim sa achizitionam o cabina de dus buna. Urmarim aspectele tehnice si de design ale cabinelor de dus atunci cand dorim sa cumparam [...]"
      },
      {
        id: 12,
        image: "/assets/images/blog/instalatii_casa-860x400.jpg",
        link: "/blog/articol/instalatia-sanitara-la-o-casa-sfaturi-utile/12",
        title: "Instalatia sanitara la o casa – Sfaturi utile",
        description: "Instalatia sanitara la o casa reprezinta factorul cheie al confortului fiecarei persoane in parte. Instalatiile sanitare ne ofera solutia moderna de a trai intr-un mediu modern si fara griji. Instalatia sanitara la o casa trebuie detaliata si proiectata de un specialist in conformitate cu [...]"
      },
      {
        id: 13,
        image: "/assets/images/blog/pardoseala-840x400.jpg",
        link: "/blog/articol/avantajele-incalzirii-prin-pardoseala/13",
        title: "Avantajele incalzirii prin pardoseala",
        description: "Incalzirea prin pardoseala este una din solutiile moderne de incalzire a locuintei. Solutia de incalzire prin pardoseala este des intalnita prin tarile nordice precum Danemarca, Norvegia si Suedia. In zilele de astazi intalnim din ce in ce mai des acest sistem de incalizre intrucat [...]"
      },
    ]


  }



}
