import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.scrolled]="isScrolled" 
         class="fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-4 py-4 md:py-6">
        <div [class.glass-navbar]="isScrolled"
             class="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16 md:h-20 transition-all duration-500 rounded-2xl border border-transparent">
            
            <a routerLink="/" class="flex items-center gap-3 group">
                <div class="w-10 h-10 bg-primary flex items-center justify-center text-on-primary font-bold text-xl rounded-none group-hover:rotate-90 transition-transform duration-500">
                    D
                </div>
                <span class="font-display-lg text-[18px] md:text-[22px] text-primary tracking-tight group-hover:opacity-70 transition-opacity">
                    David Amisi
                </span>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-10">
                <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}"
                   class="nav-link text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface/60 hover:text-primary transition-all">Accueil</a>
                <a routerLink="/parcours" routerLinkActive="active-link"
                   class="nav-link text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface/60 hover:text-primary transition-all">Parcours</a>
                <a routerLink="/realisation" routerLinkActive="active-link"
                   class="nav-link text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface/60 hover:text-primary transition-all">Projets</a>
                <a routerLink="/competences" routerLinkActive="active-link"
                   class="nav-link text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface/60 hover:text-primary transition-all">Compétences</a>
                <a routerLink="/" fragment="contact"
                   class="bg-primary text-on-primary px-8 py-3 rounded-none font-bold uppercase tracking-widest text-[10px] shadow-lg hover:shadow-2xl hover:translate-y-[-2px] transition-all">Contact</a>
            </div>

            <!-- Mobile Toggle -->
            <button (click)="toggleMenu()" class="md:hidden text-primary p-2 flex flex-col gap-1.5 items-end group">
                <div class="w-8 h-0.5 bg-primary transition-all" [class.translate-y-[8px]]="isMobileMenuOpen" [class.rotate-45]="isMobileMenuOpen"></div>
                <div class="w-5 h-0.5 bg-primary transition-all" [class.opacity-0]="isMobileMenuOpen"></div>
                <div class="w-8 h-0.5 bg-primary transition-all" [class.-translate-y-[6px]]="isMobileMenuOpen" [class.-rotate-45]="isMobileMenuOpen"></div>
            </button>
        </div>

        <!-- Mobile Fullscreen Menu -->
        <div [class.translate-y-0]="isMobileMenuOpen"
             [class.-translate-y-full]="!isMobileMenuOpen"
             class="fixed inset-0 bg-primary/98 z-[120] flex flex-col items-center justify-center gap-8 transition-transform duration-700 cubic-bezier(0.85, 0, 0.15, 1)">
            
            <button (click)="toggleMenu()" class="absolute top-8 right-8 text-on-primary hover:rotate-90 transition-all duration-300">
                <span class="material-symbols-outlined text-[40px]">close</span>
            </button>

            <div class="text-center space-y-8">
                <a (click)="toggleMenu()" routerLink="/"
                   class="block text-on-primary text-4xl md:text-5xl font-display-lg hover:text-tertiary transition-all hover:scale-110">Accueil</a>
                <a (click)="toggleMenu()" routerLink="/parcours"
                   class="block text-on-primary text-4xl md:text-5xl font-display-lg hover:text-tertiary transition-all hover:scale-110">Mon Parcours</a>
                <a (click)="toggleMenu()" routerLink="/realisation"
                   class="block text-on-primary text-4xl md:text-5xl font-display-lg hover:text-tertiary transition-all hover:scale-110">Réalisations</a>
                <a (click)="toggleMenu()" routerLink="/competences"
                   class="block text-on-primary text-4xl md:text-5xl font-display-lg hover:text-tertiary transition-all hover:scale-110">Compétences</a>
            </div>

            <a (click)="toggleMenu()" routerLink="/" fragment="contact"
               class="mt-12 bg-white text-primary px-16 py-5 rounded-none font-bold uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-all">
                Prendre Contact
            </a>
            
            <!-- Decor -->
            <div class="absolute bottom-10 left-10 text-on-primary/10 text-8xl font-bold font-display-lg pointer-events-none select-none">
                AMISI
            </div>
        </div>
    </nav>
  `,
  styles: [`
    .glass-navbar {
        background: rgba(var(--color-background-rgb), 0.85);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 10px 40px rgba(var(--color-primary-rgb), 0.08);
        border: 1px solid rgba(var(--color-primary-rgb), 0.05) !important;
        height: 64px !important;
    }
    .scrolled { padding-top: 10px !important; padding-bottom: 10px !important; }
    .nav-link { position: relative; }
    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-primary);
        transition: width 0.3s ease;
    }
    .nav-link:hover::after, .active-link::after { width: 100%; }
    .active-link { color: var(--color-primary) !important; }
  `]
})
export class Navbar {
  isMobileMenuOpen = false;
  isScrolled = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }
}
