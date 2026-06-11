import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <header class="relative min-h-screen flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img class="w-full h-full object-cover transition-transform duration-[10s] ease-linear scale-110 group-hover:scale-100" 
                 style="animation: slowZoom 20s infinite alternate;"
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5MGljgf4ERrwjmFaNIArl4Li94_L8jcihIzpinj1WPQ402IHUj6gTyfXxeO5QXlsTgz0m-Sbpm3bHsXeg9M1Spy9lfjY6EIL5qH4M6vXASKTk5lP7giI_q2UiBII_9YhAmgWW2kZByJMhsdVggOp5lV3Gtab916xWESuJqDmMNu7orx7Z329ElJZ7McH6AncDCDO2GDBodOmzp24LWof-1hxcDAw95POQ2G_RzAq_w8NwcZ7DuE05bP9ItcSmNP1fIbcVY_aKSXy9" 
                 (click)="viewImage('https://lh3.googleusercontent.com/aida-public/AB6AXuB5MGljgf4ERrwjmFaNIArl4Li94_L8jcihIzpinj1WPQ402IHUj6gTyfXxeO5QXlsTgz0m-Sbpm3bHsXeg9M1Spy9lfjY6EIL5qH4M6vXASKTk5lP7giI_q2UiBII_9YhAmgWW2kZByJMhsdVggOp5lV3Gtab916xWESuJqDmMNu7orx7Z329ElJZ7McH6AncDCDO2GDBodOmzp24LWof-1hxcDAw95POQ2G_RzAq_w8NwcZ7DuE05bP9ItcSmNP1fIbcVY_aKSXy9')" 
                 fetchpriority="high" />
            <div class="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </div>
        <div class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div class="max-w-3xl reveal-item">
                <p class="font-label-caps text-[12px] text-primary mb-6 tracking-[0.5em] uppercase font-bold flex items-center gap-4">
                    <span class="w-12 h-[1px] bg-primary"></span>
                    Architecture & Résilience
                </p>
                <h1 class="font-display-lg text-[clamp(2.5rem,8vw,5.5rem)] text-primary mb-12 leading-[1.1] font-bold">L'Architecture comme<br><span class="text-tertiary">Choix de Vie.</span></h1>
                <div class="flex flex-wrap gap-8 reveal-item reveal-delay-1">
                    <button routerLink="/realisation" class="btn-primary px-12 py-6 group">
                        Parcourir le Portfolio
                        <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
                    </button>
                    <a href="#about" class="flex items-center gap-3 font-bold text-primary group transition-all uppercase tracking-[0.2em] text-[10px]">
                        Mon Histoire
                        <span class="material-symbols-outlined group-hover:translate-y-1 transition-transform">south</span>
                    </a>
                </div>
            </div>
        </div>
        <style>
          @keyframes slowZoom {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
          }
        </style>
    </header>
    <section id="about" class="py-section-gap bg-background overflow-hidden">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                <div class="md:col-span-5 relative group">
                    <div class="aspect-[4/5] overflow-hidden rounded-none shadow-2xl transition-all duration-1000 group-hover:shadow-[0_40px_100px_rgba(92,61,46,0.2)]">
                        <img class="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 cursor-zoom-in" 
                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZi0A-wDtihuTPsqP5R2YdXPTVCCtq_Q18DjJuSln1m7cxluqN-YwmEEUu9GhoNdPzTWz5uYvFM_zKn3X6-d0Lq63G6Vc1lzLy3B0Df9bSb10TYVnztUH99-6RreUhNpdiwP7e7_cRTZsfIKT7szN2hLhoz8wmRxpASMC5m4Ey2k21Nn1JYgtt-Idxpyy2mp_p3LhK4lLsqtX1RAtNUK3EmJ_1WE0ZnZiv6hk5VIm4ntyh6329vIQNyw8fjaizNBT6pcVo2eh3lTxj" 
                             (click)="viewImage('https://lh3.googleusercontent.com/aida-public/AB6AXuCZi0A-wDtihuTPsqP5R2YdXPTVCCtq_Q18DjJuSln1m7cxluqN-YwmEEUu9GhoNdPzTWz5uYvFM_zKn3X6-d0Lq63G6Vc1lzLy3B0Df9bSb10TYVnztUH99-6RreUhNpdiwP7e7_cRTZsfIKT7szN2hLhoz8wmRxpASMC5m4Ey2k21Nn1JYgtt-Idxpyy2mp_p3LhK4lLsqtX1RAtNUK3EmJ_1WE0ZnZiv6hk5VIm4ntyh6329vIQNyw8fjaizNBT6pcVo2eh3lTxj')" />
                    </div>
                    <div class="absolute -bottom-10 -left-10 bg-primary p-12 text-on-primary hidden lg:block shadow-2xl reveal-item reveal-delay-2">
                        <p class="font-display-lg text-7xl mb-2 font-bold leading-none">2018</p>
                        <p class="font-label-caps text-xs tracking-[0.3em] opacity-80 uppercase">Le Début du Voyage</p>
                    </div>
                </div>
                <div class="md:col-span-6 md:col-start-7 reveal-item">
                    <span class="font-label-caps text-[11px] text-tertiary mb-4 block tracking-[0.2em] font-bold">L'HOMME DERRIÈRE LES LIGNES</span>
                    <h2 class="font-display-lg text-[clamp(2rem,5vw,3rem)] text-primary mb-8 leading-tight">De Bukavu à la Conception de Demain.</h2>
                    <div class="space-y-4 font-body-lg text-body-lg text-on-surface-variant">
                        <p>Né à Bukavu, mon parcours n'a pas été une ligne droite tracée sur une planche à dessin. Il a été forgé par la résilience, traversant les doutes et les défis financiers pour finalement trouver ma véritable vocation.</p>
                        <p>Inspiré par les mots de mon père — <span class="italic text-primary">"La vie c'est le choix : soit tu réussis, soit tu échoues"</span> — j'ai rejoint la faculté d'Architecture de l'UCB en 2018. Aujourd'hui, je transforme cette force intérieure en structures tangibles, alliant la rigueur technique à une sensibilité humaine profonde.</p>
                    </div>
                    <a class="inline-flex items-center gap-3 mt-8 font-bold text-primary hover:gap-5 transition-all underline-offset-8 hover:underline decoration-tertiary" routerLink="/parcours">
                        Lire mon histoire complète
                        <span class="material-symbols-outlined">east</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" class="py-section-gap bg-gradient-to-br from-surface-container-lowest via-surface to-surface-container-low relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <!-- Header Section -->
            <div class="text-center mb-20">
                <span class="font-label-caps text-label-caps text-tertiary mb-6 inline-block uppercase tracking-widest text-[10px] bg-tertiary/10 px-4 py-2 border border-tertiary/20">Conversation</span>
                <h2 class="font-display-lg text-[clamp(2rem,6vw,3.5rem)] text-primary mb-8 leading-tight">Contactez-moi</h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                    Une idée ? Un projet ? Discutons-en directement. Je suis à votre écoute pour transformer vos visions en structures tangibles.
                </p>
            </div>

            <!-- Form Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <!-- Left side - Contact methods -->
                <div class="space-y-10">
                    <div class="space-y-4">
                        <h3 class="font-headline-md text-headline-md text-primary mb-8">Moyens de Communication</h3>
                    </div>
                    
                    <a href="https://wa.me/243854832846" target="_blank" class="reveal-item group flex items-start gap-6 p-8 border border-outline/10 bg-white/50 hover:bg-primary hover:text-on-primary transition-all duration-500 rounded-2xl shadow-sm hover:shadow-2xl cursor-pointer">
                        <div class="p-4 bg-primary/10 group-hover:bg-on-primary/20 rounded-xl transition-colors">
                            <span class="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary">chat</span>
                        </div>
                        <div>
                            <h4 class="font-headline-md text-headline-md mb-1">WhatsApp</h4>
                            <p class="font-body-md text-on-surface-variant group-hover:text-on-primary/70">+243 854 832 846</p>
                            <p class="font-label-caps text-tertiary group-hover:text-on-primary/60 mt-2 text-[9px] uppercase tracking-widest">Communication en temps réel</p>
                        </div>
                        <span class="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">arrow_forward</span>
                    </a>

                    <!-- Email -->
                    <a href="mailto:contact@davidamisi.com" class="reveal-item reveal-delay-1 group flex items-start gap-6 p-8 border border-outline/10 bg-white/50 hover:bg-primary hover:text-on-primary transition-all duration-500 rounded-2xl shadow-sm hover:shadow-2xl cursor-pointer">
                        <div class="p-4 bg-tertiary/10 group-hover:bg-on-primary/20 rounded-xl transition-colors">
                            <span class="material-symbols-outlined text-3xl text-tertiary group-hover:text-on-primary">mail</span>
                        </div>
                        <div>
                            <h4 class="font-headline-md text-headline-md mb-1">Email</h4>
                            <p class="font-body-md text-on-surface-variant group-hover:text-on-primary/70">contact@davidamisi.com</p>
                            <p class="font-label-caps text-tertiary group-hover:text-on-primary/60 mt-2 text-[9px] uppercase tracking-widest">Réponse rapide garantie</p>
                        </div>
                        <span class="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">arrow_forward</span>
                    </a>

                    <!-- Quick stats -->
                    <div class="grid grid-cols-2 gap-4 pt-6 border-t border-outline/10 reveal-item reveal-delay-2">
                        <div class="text-center">
                            <p class="font-display-lg text-primary text-5xl">24h</p>
                            <p class="font-label-caps text-on-surface-variant text-[9px] mt-2 uppercase tracking-widest font-bold">Réponse moyenne</p>
                        </div>
                        <div class="text-center">
                            <p class="font-display-lg text-tertiary text-5xl">100%</p>
                            <p class="font-label-caps text-on-surface-variant text-[9px] mt-2 uppercase tracking-widest font-bold">Engagement</p>
                        </div>
                    </div>
                </div>

                <!-- Right side - Form -->
                <div class="reveal-item reveal-delay-3 bg-surface p-10 md:p-16 rounded-3xl shadow-2xl border border-outline/5 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 rounded-3xl pointer-events-none"></div>
                    
                    <form (ngSubmit)="submitForm()" class="space-y-8 relative z-10">
                        <!-- Name Field -->
                        <div class="space-y-3">
                            <label class="block font-label-caps text-primary uppercase tracking-widest text-[10px] font-bold">Nom Complet</label>
                            <input 
                                type="text" 
                                [(ngModel)]="name" 
                                name="name" 
                                required 
                                placeholder="votre nom"
                                class="w-full bg-surface-container-low border-2 border-outline/10 hover:border-primary/30 focus:border-primary p-4 rounded-xl focus:outline-none transition-all duration-300 font-body-md">
                        </div>

                        <!-- Email Field -->
                        <div class="space-y-3">
                            <label class="block font-label-caps text-primary uppercase tracking-widest text-[10px] font-bold">Email</label>
                            <input 
                                type="email" 
                                [(ngModel)]="email" 
                                name="email" 
                                required 
                                placeholder="votre@email.com"
                                class="w-full bg-surface-container-low border-2 border-outline/10 hover:border-primary/30 focus:border-primary p-4 rounded-xl focus:outline-none transition-all duration-300 font-body-md">
                        </div>

                        <!-- Message Field -->
                        <div class="space-y-3">
                            <label class="block font-label-caps text-primary uppercase tracking-widest text-[10px] font-bold">Votre Idée de Projet</label>
                            <textarea 
                                [(ngModel)]="idea" 
                                name="idea" 
                                required 
                                rows="5"
                                placeholder="Décrivez votre vision..."
                                class="w-full bg-surface-container-low border-2 border-outline/10 hover:border-primary/30 focus:border-primary p-4 rounded-xl focus:outline-none transition-all duration-300 font-body-md resize-none"></textarea>
                        </div>

                        <!-- Submit Button -->
                        <button 
                            type="submit" 
                            class="w-full bg-primary text-on-primary py-6 rounded-none font-bold uppercase tracking-widest text-[11px] hover:shadow-[0_20px_50px_rgba(92,61,46,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 group mt-8">
                            <span>Envoyer sur WhatsApp</span>
                            <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
                        </button>

                        <!-- Privacy note -->
                        <p class="font-label-caps text-on-surface-variant/60 text-[9px] text-center mt-6 uppercase tracking-widest">
                            Vos données sont confidentielles • Réponse garantie en 24h
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  `
})
export class Home {
  name: string = '';
  email: string = '';
  idea: string = '';

  viewImage(url: string) {
    if ((window as any).openLightbox) {
        (window as any).openLightbox(url);
    }
  }

  submitForm() {
    if (this.name && this.email && this.idea) {
        const message = `Bonjour David, je suis ${this.name} (${this.email}). J'ai une idée de projet : ${this.idea}`;
        window.open(`https://wa.me/243854832846?text=${encodeURIComponent(message)}`, '_blank');
    }
  }
}
