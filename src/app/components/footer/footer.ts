import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-primary text-on-primary">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                <!-- Brand -->
                <div class="md:col-span-5">
                    <h3 class="font-display-lg text-headline-lg mb-6">Amisi Abecha David</h3>
                    <p class="text-on-primary/60 font-body-md leading-relaxed max-w-sm">
                        L'architecture comme choix de vie — un alliage de résilience, de rigueur technique et d'une vision profondément humaine de l'espace.
                    </p>
                    <div class="mt-10 flex gap-4">
                        <a href="#" class="w-10 h-10 border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-500">
                             <i class="material-symbols-outlined text-[18px]">public</i>
                        </a>
                        <a href="#" class="w-10 h-10 border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-500">
                             <i class="material-symbols-outlined text-[18px]">share</i>
                        </a>
                    </div>
                </div>

                <!-- Links -->
                <div class="md:col-span-3">
                    <h4 class="font-label-caps text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-on-primary/40">Navigation</h4>
                    <nav class="flex flex-col gap-4">
                        <a routerLink="/" class="text-on-primary/70 hover:text-on-primary transition-all hover:translate-x-1 inline-block font-body-sm">Accueil</a>
                        <a routerLink="/parcours" class="text-on-primary/70 hover:text-on-primary transition-all hover:translate-x-1 inline-block font-body-sm">Mon Parcours</a>
                        <a routerLink="/realisation" class="text-on-primary/70 hover:text-on-primary transition-all hover:translate-x-1 inline-block font-body-sm">Projets &amp; Études</a>
                        <a routerLink="/competences" class="text-on-primary/70 hover:text-on-primary transition-all hover:translate-x-1 inline-block font-body-sm">Compétences</a>
                    </nav>
                </div>

                <!-- Contact -->
                <div class="md:col-span-4">
                    <h4 class="font-label-caps text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-on-primary/40">Entrer en contact</h4>
                    <div class="flex flex-col gap-6">
                        <a href="https://wa.me/243854832846" target="_blank"
                           class="group flex items-start gap-4 text-on-primary/70 hover:text-on-primary transition-colors">
                            <span class="material-symbols-outlined text-tertiary mt-1">chat</span>
                            <div>
                                <span class="block text-[13px] font-bold">WhatsApp Business</span>
                                <span class="text-[14px] opacity-60">Architecte Conseil</span>
                            </div>
                        </a>
                        <a href="mailto:contact@davidamisi.com"
                           class="group flex items-start gap-4 text-on-primary/70 hover:text-on-primary transition-colors">
                            <span class="material-symbols-outlined text-tertiary mt-1">mail</span>
                            <div>
                                <span class="block text-[13px] font-bold">Email Direct</span>
                                <span class="text-[14px] opacity-60">contact@davidamisi.com</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom bar -->
            <div class="border-t border-on-primary/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-on-primary/30 text-[11px] tracking-widest uppercase font-bold">
                    &copy; 2024 Amisi Abecha David — Architecte &amp; Urbaniste • Bukavu, RDC
                </p>
                <div class="flex items-center gap-8">
                    <span class="text-on-primary/20 text-[10px] uppercase tracking-tighter hidden md:block">Disponibilité : Projets Internationaux</span>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class Footer {}
