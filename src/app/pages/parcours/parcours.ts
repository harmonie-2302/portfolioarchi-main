import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  styles: [`
    .blueprint-grid {
      background-image: radial-gradient(circle, var(--outline) 1px, transparent 1px);
      background-size: 30px 30px;
    }
    .hero-gradient {
      background: linear-gradient(135deg, var(--surface-container-low) 0%, var(--background) 100%);
    }
  `],
  template: `
    <main class="relative bg-background">
      <!-- Structural Background Decoration -->
      <div class="absolute inset-0 blueprint-grid pointer-events-none opacity-5"></div>

      <!-- Hero Section -->
      <header class="pt-section-gap pb-20 relative overflow-hidden">
          <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div class="md:col-span-7">
                  <span class="font-label-caps text-label-caps text-tertiary mb-4 block uppercase tracking-widest text-[10px] font-bold">HISTOIRE &amp; RÉSILIENCE</span>
                  <h1 class="font-display-lg text-display-lg text-primary mb-8 leading-tight">De l'épreuve à la structure.</h1>
                  <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                      Découvrez le cheminement d'Amisi Abecha David : un voyage marqué par la persévérance, transformant
                      les obstacles en fondations solides pour une architecture humaine et rigoureuse.
                  </p>
              </div>
              <div class="md:col-span-5 relative">
                  <div class="aspect-[4/5] overflow-hidden rounded-lg border border-outline/10 shadow-2xl group">
                      <img (click)="viewImage('https://lh3.googleusercontent.com/aida-public/AB6AXuC5F7e5bR0ve2o-nIk3Hn-e-0evPFuohgohrYLkmPDNfsRkZH2ajPUxzDqV7Tw5D09JKtmUT4eSM2X_fBVETfcsdWRsvCBH5zA7TYjFSpx8Jo94Gu-EDUJMiAuYFFRSZq7AeYZG_skcKjyXhJ7KAg3N6ZGdlOkP0rapuwlELMwmx22vZ7MP9DZggocbmxLT0iqOrf4vuIDCVXzph2BDJ522NBZSnz9BZvniCo3d9RxRls6C69sGwP4sZajFArOVK_M8jFywNc6STenM')" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 cursor-zoom-in" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5F7e5bR0ve2o-nIk3Hn-e-0evPFuohgohrYLkmPDNfsRkZH2ajPUxzDqV7Tw5D09JKtmUT4eSM2X_fBVETfcsdWRsvCBH5zA7TYjFSpx8Jo94Gu-EDUJMiAuYFFRSZq7AeYZG_skcKjyXhJ7KAg3N6ZGdlOkP0rapuwlELMwmx22vZ7MP9DZggocbmxLT0iqOrf4vuIDCVXzph2BDJ522NBZSnz9BZvniCo3d9RxRls6C69sGwP4sZajFArOVK_M8jFywNc6STenM" />
                  </div>
                  <div class="absolute -bottom-8 -left-8 bg-surface-container-lowest p-10 border border-outline/10 shadow-xl hidden md:block">
                      <p class="font-headline-md text-headline-md text-primary italic leading-tight">"La vie, c'est le choix."</p>
                      <p class="font-label-caps text-label-caps text-tertiary mt-3 text-right uppercase tracking-widest text-[9px] font-bold">— ABECHA SENIOR</p>
                  </div>
              </div>
          </div>
      </header>

      <!-- Timeline Journey -->
      <section class="py-section-gap relative">
          <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div class="relative">
                  <!-- Timeline Line -->
                  <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline/10 -translate-x-1/2"></div>
                  
                  <!-- Step 1: Les Défis Initiaux -->
                  <div class="relative grid grid-cols-1 md:grid-cols-2 gap-20 mb-40 items-center group reveal-item">
                      <div class="order-2 md:order-1 md:text-right pr-0 md:pr-16">
                          <span class="font-label-caps text-[10px] text-tertiary mb-3 block uppercase tracking-[0.25em] font-bold">1997 — 2015</span>
                          <h2 class="font-display-lg text-3xl text-primary mb-6 font-bold">Les Racines de la Volonté</h2>
                          <p class="font-body-md text-on-surface-variant leading-relaxed">
                              Né à Bukavu, David traverse un parcours scolaire mouvementé. Chaque changement d'école, chaque épreuve financière, a forgé son caractère. En tant qu'aîné, la résilience n'était pas un choix, mais une nécessité pour bâtir son futur.
                          </p>
                      </div>
                      <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background group-hover:scale-150 transition-all duration-500"></div>
                      <div class="order-1 md:order-2 md:pl-16">
                          <div class="aspect-video rounded-none overflow-hidden border border-outline/10 shadow-lg group-hover:shadow-2xl transition-all duration-1000">
                              <img class="w-full h-full object-cover cursor-zoom-in grayscale group-hover:grayscale-0 transition-all duration-1000" 
                                   (click)="viewImage('https://lh3.googleusercontent.com/aida-public/AB6AXuC3oJsUQo1tkIJwX2TDmq7Tyt1nq5GedKMFquQiUVeyiDGxDQMVFzcMFnIEbHf806zmsT86fLOUNbsHtiLS6Ye_1PTR1mh4LA7B75v3X91VthsLyAVu4GpWhdqExIIIghWcePdGvDg_cnLCUnivGIbIRIxgxhWD0HzgF9P-Zvn9DPaUHTIpIapHFAeAWirJoRM8l78zBl9a2k7rJ-xVKnVbf_j4sIqj1CN-MVTrWuyO22D62kOfQxt7w88rJwDsB2Qfk1lGPy9Xa2Dl')" 
                                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3oJsUQo1tkIJwX2TDmq7Tyt1nq5GedKMFquQiUVeyiDGxDQMVFzcMFnIEbHf806zmsT86fLOUNbsHtiLS6Ye_1PTR1mh4LA7B75v3X91VthsLyAVu4GpWhdqExIIIghWcePdGvDg_cnLCUnivGIbIRIxgxhWD0HzgF9P-Zvn9DPaUHTIpIapHFAeAWirJoRM8l78zBl9a2k7rJ-xVKnVbf_j4sIqj1CN-MVTrWuyO22D62kOfQxt7w88rJwDsB2Qfk1lGPy9Xa2Dl')" />
                          </div>
                      </div>
                  </div>

                  <!-- Step 2: Le Creux de la Vague -->
                  <div class="relative grid grid-cols-1 md:grid-cols-2 gap-20 mb-40 items-center group reveal-item reveal-delay-1">
                      <div class="order-1 md:pr-16">
                          <div class="aspect-video rounded-none overflow-hidden border border-outline/10 shadow-lg group-hover:shadow-2xl transition-all duration-1000">
                              <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmQuxEPMNiQLzQ-nwyVSWyZuB4N2GQmQm0CEmzQ30FAoG7ybSB9lSuKtV4klf28q6gbC5vHsB3GD075U4e17alg7YGOL-fQU68_ETCQYL4sZcT9g_6Cs5J1m54Ptd6kQIc6hszxMhe2P2pwkaO5QepZr1iXkGULBKHnzx2-KIShMf1lF0ONFB5Kpgxv2ZhMUcgWRR3QkJMvSh_k2bWah6DZgAkllaOKBe5_pl4BUbBfaQN7JmHzG8HYephp3yl_4BGvIRE1WI8Ddr" />
                          </div>
                      </div>
                      <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-tertiary rounded-full z-10 border-4 border-background group-hover:scale-150 transition-all duration-500"></div>
                      <div class="order-2 pl-12 md:pl-16">
                          <span class="font-label-caps text-[10px] text-tertiary mb-3 block uppercase tracking-[0.25em] font-bold">LA CRISE</span>
                          <h2 class="font-display-lg text-3xl text-primary mb-6 font-bold">L'Obscurité d'Olimba</h2>
                          <p class="font-body-md text-on-surface-variant leading-relaxed">
                              À l'Institut Olimba, David touche le fond face à la rigueur et aux doutes de l'adolescence.
                              Après un premier échec, il se redresse. C'est ici que le choix de réussir devient une promesse faite à lui-même et à sa famille.
                          </p>
                      </div>
                  </div>

                  <!-- Step 3: Le Déclic -->
                  <div class="relative grid grid-cols-1 md:grid-cols-2 gap-20 mb-40 items-center group reveal-item">
                      <div class="order-2 md:order-1 md:text-right pr-0 md:pr-16">
                          <span class="font-label-caps text-[10px] text-tertiary mb-3 block uppercase tracking-[0.25em] font-bold">LA RENAISSANCE</span>
                          <h2 class="font-display-lg text-3xl text-primary mb-6 font-bold">Faraja : Le Triomphe à 70%</h2>
                          <p class="font-body-md text-on-surface-variant leading-relaxed">
                              Le passage à l'Institut Faraja Béthanie marque un tournant radical. Porté par une énergie nouvelle, il obtient son diplôme d'État avec distinction. La résilience a payé ; la voie vers l'architecture est désormais ouverte.
                          </p>
                      </div>
                      <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background group-hover:scale-150 transition-all duration-500"></div>
                      <div class="order-1 md:order-2 md:pl-16">
                          <div class="aspect-video rounded-none overflow-hidden border border-outline/10 shadow-lg group-hover:shadow-2xl transition-all duration-1000">
                              <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1TsoNBa2JwdPJMBa2JwdPJMlpWA5wmlKDC2lzy7M1cyXt7vwRLFqXLFMNDslEUnu6uBTnwPhZMyDC6WEc-jcHvREmJP6c1XsHa1JlvVkMtiX1_KvuzW083wAHJcmZMQ6j6qHDTEtxfy8icxX-ZSWLSRrKmC1u96YDG5uq5SO9cFhKRL-9SHldXpaFHgxDIpiHvP_wdHkfQQ8imkz6nSvg-OjGtgU7l8w9DccABbcfT9hj2W-V839SfV7sNm6L1euZS9MzOm_jeXQR3NZriy1GD" />
                          </div>
                      </div>
                  </div>

                  <!-- Step 4: L'Ascension Professionnelle -->
                  <div class="relative grid grid-cols-1 md:grid-cols-2 gap-20 mb-12 items-center group">
                      <div class="order-1 md:pr-16">
                          <div class="aspect-video rounded-lg overflow-hidden border border-outline/10 shadow-lg group-hover:shadow-2xl transition-all">
                              <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjGCGK6HQvTVsjqcpMtu6MtMeQa8HCOo_D2C6RLL8BIFgkfWhT_cTGLbJOPx3Hv-iYBlw-GBTpDKysy-k7T5u1DAxdSxX5X4pyW7TFm0iaxmd2PhYmNcdbWgdPp1SS_USoizamvnWvl7JgzVinRjuXEV22sBOQn54L-IETRPPH6fv-u8Lv_obCQwlh5JAUYWmJzmsF9Qw7Oq31IDCZdZV4MemOVS8sDmlUbRlmnHmTTDTWJ583kHS2SJkQlDWt4SAxF09652Tqf4_a" />
                          </div>
                      </div>
                      <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-tertiary rounded-full z-10 border-4 border-background group-hover:scale-150 transition-transform"></div>
                      <div class="order-2 pl-12 md:pl-16">
                          <span class="font-label-caps text-label-caps text-tertiary mb-3 block uppercase tracking-widest text-[10px] font-bold">PRÉSENT</span>
                          <h2 class="font-headline-lg text-headline-lg text-primary mb-6">De Bukavu à Paris</h2>
                          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                              Repéré pour son talent brut et sa rigueur, David collabore aujourd'hui sur des projets internationaux de la SCERL. Une collaboration unique : il conçoit et bâtit à Bukavu pour un client basé à Paris, prouvant que la compétence n'a pas de frontières.
                          </p>
                          <div class="mt-10 flex flex-wrap gap-4">
                              <div class="px-6 py-3 bg-surface-container-low border border-outline/10 rounded-none group-hover:bg-primary group-hover:text-on-primary transition-all">
                                  <span class="font-label-caps text-[9px] block mb-1 uppercase tracking-widest font-bold">PARTENAIRE</span>
                                  <span class="font-body-sm font-bold">Dr. Lisau (Paris)</span>
                              </div>
                              <div class="px-6 py-3 bg-surface-container-low border border-outline/10 rounded-none group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                                  <span class="font-label-caps text-[9px] block mb-1 uppercase tracking-widest font-bold">IMPACT</span>
                                  <span class="font-body-sm font-bold">Design Global</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Stats / Bento Grid Section -->
      <section class="bg-surface-container-lowest py-section-gap reveal-item">
          <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div class="mb-16">
                  <h2 class="font-display-lg text-4xl text-primary font-bold">Le parcours en chiffres</h2>
                  <div class="w-16 h-1 bg-tertiary mt-6"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                  <div class="bg-surface-container-low p-10 border border-outline/10 rounded-2xl flex flex-col justify-center items-center text-center group hover:bg-primary transition-all duration-700 shadow-sm hover:shadow-2xl reveal-item">
                      <span class="text-display-lg font-display-lg text-primary group-hover:text-on-primary">05</span>
                      <span class="font-label-caps text-on-surface-variant group-hover:text-on-primary/60 uppercase tracking-[0.2em] text-[9px] font-bold mt-2">INSTITUTS PARCOURUS</span>
                  </div>
                  <div class="md:col-span-2 bg-primary p-12 rounded-2xl text-on-primary flex flex-col justify-between shadow-2xl relative overflow-hidden group reveal-item reveal-delay-1">
                      <div class="absolute inset-0 blueprint-grid opacity-10 group-hover:opacity-20 transition-opacity"></div>
                      <p class="font-body-lg text-xl italic opacity-95 relative z-10 leading-relaxed">"C'est face à la précarité que j'ai trouvé ma vocation. L'architecture n'est pas qu'un métier, c'est ma réponse au destin."</p>
                      <div class="mt-12 relative z-10 border-l border-white/20 pl-6">
                          <span class="font-label-caps text-[9px] uppercase tracking-widest opacity-60 font-bold block mb-2">MÉTHODOLOGIE</span>
                          <p class="text-sm font-bold">Conception 2D/3D (90% AutoCAD/Archicad)</p>
                      </div>
                  </div>
                  <div class="bg-tertiary p-10 rounded-2xl text-on-tertiary flex flex-col justify-center items-center text-center shadow-xl group hover:scale-[1.05] transition-all duration-500 reveal-item reveal-delay-2">
                      <span class="text-display-lg font-display-lg text-white">70%</span>
                      <span class="font-label-caps uppercase tracking-[0.2em] text-[9px] font-bold mt-2 text-white/80">DISTINCTION ÉTAT</span>
                  </div>
              </div>
          </div>
      </section>

      <!-- Blueprint CTA -->
      <section id="contact-cta" class="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center reveal-item">
          <div class="w-full h-px border-t border-dashed border-outline/20 mb-16 opacity-30"></div>
          <h3 class="font-display-lg text-[clamp(2rem,5vw,3.5rem)] text-primary mb-8 font-bold">Prêt à bâtir votre projet ?</h3>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
              De Bukavu à l'international, je mets ma résilience et mon expertise au service de vos visions architecturales les plus audacieuses.
          </p>
          <a class="bg-primary text-on-primary px-12 py-6 rounded-none font-bold hover:bg-primary/95 transition-all shadow-2xl group inline-flex items-center gap-3 uppercase tracking-widest text-xs" href="#contact">
              Initier une conversation
              <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
          </a>
      </section>
    </main>
  `
})
export class Parcours {
  viewImage(url: string) {
    if ((window as any).openLightbox) {
        (window as any).openLightbox(url);
    }
  }
}
