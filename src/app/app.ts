import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen pt-20"> <!-- Ajout du padding top pour compenser la navbar fixed -->
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>

    <!-- Custom Cursor -->
    <div class="cursor-dot md:block hidden" [style.left.px]="cursorX" [style.top.px]="cursorY"></div>
    <div class="cursor-outline md:block hidden" [style.left.px]="cursorX" [style.top.px]="cursorY"></div>

    <!-- Global Lightbox -->
    <div *ngIf="lightboxImage" 
         (click)="closeLightbox()"
         class="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-500">
        <button (click)="closeLightbox()" class="absolute top-8 right-8 text-white hover:rotate-90 transition-all duration-300">
            <span class="material-symbols-outlined text-4xl">close</span>
        </button>
        <img [src]="lightboxImage" class="max-w-full max-h-full object-contain shadow-[0_0_80px_rgba(0,0,0,0.5)] rounded-sm animate-in zoom-in duration-500" />
    </div>
  `
})
export class App {
  lightboxImage: string | null = null;
  cursorX = 0;
  cursorY = 0;

  constructor(private router: Router) {
    (window as any).openLightbox = (url: string) => {
      this.lightboxImage = url;
    };

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeLightbox();
      window.scrollTo(0, 0);
      this.initScrollReveal();
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', (e) => {
        this.cursorX = e.clientX;
        this.cursorY = e.clientY;
      });
      this.initScrollReveal();
    }
  }

  private initScrollReveal() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('section, .reveal-item').forEach(el => observer.observe(el));
    }, 500);
  }

  closeLightbox() {
    this.lightboxImage = null;
  }
}
