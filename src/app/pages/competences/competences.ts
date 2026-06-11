import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <main class="relative">
    <!-- Structural Background Decoration -->
    <div class="absolute inset-0 blueprint-grid pointer-events-none opacity-5"></div>
    
    <!-- Hero Title -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-12 reveal-item">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="max-w-2xl">
                <span class="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-[0.3em] mb-6 block font-bold flex items-center gap-4">
                    <span class="w-12 h-[1px] bg-outline/20"></span>
                    LOGICIELS & MÉTHODES
                </span>
                <h1 class="font-display-lg text-[clamp(2rem,6vw,4.5rem)] text-primary leading-tight font-bold">Compétences &amp; Formations</h1>
            </div>
            <div class="md:w-1/3 reveal-item reveal-delay-2">
                <p class="font-body-md text-body-md text-on-surface-variant border-l-2 border-primary pl-6 italic leading-relaxed">
                    "L'architecture est une science technique mue par une intention artistique."
                </p>
            </div>
        </div>
    </section>

    <!-- Main Skills Grid -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <!-- Category 1: Conception 2D/3D -->
            <div class="md:col-span-8 flex flex-col gap-8 reveal-item">
                <div class="bg-surface-container-lowest border border-outline/10 p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700">
                    <div class="flex items-center justify-between mb-12">
                        <div>
                            <h2 class="font-display-lg text-3xl text-primary">Conception 2D/3D</h2>
                            <p class="font-label-caps text-[9px] text-tertiary mt-2 uppercase tracking-[0.2em] font-bold">MAÎTRISE GLOBALE : 85%</p>
                        </div>
                        <span class="material-symbols-outlined text-primary text-6xl opacity-10">architecture</span>
                    </div>
                    <div class="space-y-12">
                        <!-- Skill Item -->
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span class="font-body-lg text-body-lg font-bold">AutoCAD</span>
                                <span class="font-label-caps text-label-caps text-primary">90%</span>
                            </div>
                            <div class="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                <div class="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.3)] transition-all duration-1000" style="width: 90%;"></div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span class="font-body-lg text-body-lg font-bold">Archicad</span>
                                <span class="font-label-caps text-label-caps text-primary">90%</span>
                            </div>
                            <div class="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                <div class="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.3)] transition-all duration-1000" style="width: 90%;"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span class="font-body-md text-body-md">SketchUp</span>
                                    <span class="font-label-caps text-label-caps text-on-surface-variant">60%</span>
                                </div>
                                <div class="h-1 bg-surface-container-high rounded-full overflow-hidden">
                                    <div class="h-full bg-tertiary rounded-full transition-all duration-1000" style="width: 60%;"></div>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span class="font-body-md text-body-md">Revit</span>
                                    <span class="font-label-caps text-label-caps text-on-surface-variant">50%</span>
                                </div>
                                <div class="h-1 bg-surface-container-high rounded-full overflow-hidden">
                                    <div class="h-full bg-tertiary rounded-full transition-all duration-1000" style="width: 50%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Side Info: Presentation -->
            <div class="md:col-span-4 flex flex-col gap-gutter">
                <div class="bg-primary text-on-primary p-10 rounded-lg shadow-xl relative overflow-hidden flex-1 group">
                    <div class="absolute inset-0 blueprint-grid opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <span class="material-symbols-outlined mb-8 text-5xl relative z-10 block opacity-80">photo_camera</span>
                    <h2 class="font-headline-md text-headline-md mb-2 relative z-10">Présentation &amp; Rendu</h2>
                    <p class="font-label-caps text-label-caps opacity-60 mb-8 relative z-10 uppercase tracking-widest text-[10px]">MAÎTRISE GLOBALE : 70%</p>
                    <div class="space-y-6 relative z-10">
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="font-body-md font-bold">Lumion</span>
                                <span class="font-label-caps">80%</span>
                            </div>
                            <div class="h-1 bg-white/20 rounded-full overflow-hidden">
                                <div class="h-full bg-white rounded-full transition-all duration-1000" style="width: 80%;"></div>
                            </div>
                        </div>
                    </div>
                    <p class="font-body-md text-body-md mt-8 opacity-80 leading-relaxed relative z-10">
                        Création de visuels photoréalistes pour une immersion totale des clients dans leurs futurs espaces.
                    </p>
                </div>
                
                <div class="bg-surface-container-low border border-outline/10 p-10 rounded-lg relative overflow-hidden group">
                    <div class="relative z-10">
                        <h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px] mb-4">LOGICIELS BUREAUTIQUE</h3>
                        <div class="flex items-end gap-4">
                            <span class="font-display-lg text-display-lg text-primary">90%</span>
                            <span class="font-body-md text-body-md mb-4 text-on-surface-variant font-bold">Suite Office</span>
                        </div>
                    </div>
                    <span class="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-primary opacity-5 group-hover:opacity-10 transition-opacity">description</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Post-production Section -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div class="dotted-divider mb-20 opacity-30"></div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
                <h2 class="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">Post-production &amp; Médias</h2>
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Au-delà des plans techniques, je maîtrise les outils de finalisation visuelle pour une communication architecturale d'excellence.
                </p>
            </div>
            <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <!-- Photoshop Card -->
                <div class="p-8 border border-outline/10 rounded-lg hover:border-primary transition-all hover:bg-surface-container-lowest group shadow-sm hover:shadow-md">
                    <span class="font-label-caps text-label-caps text-on-surface-variant block mb-6 uppercase tracking-widest text-[9px]">ÉDITION D'IMAGE</span>
                    <div class="flex justify-between items-end mb-4">
                        <h3 class="font-headline-md text-headline-md text-primary">Photoshop</h3>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex-1 h-0.5 bg-surface-container-high">
                            <div class="h-full bg-primary transition-all duration-1000" style="width: 70%;"></div>
                        </div>
                        <span class="font-body-md text-primary font-bold text-xs">70%</span>
                    </div>
                </div>
                <!-- Lightroom Card -->
                <div class="p-8 border border-outline/10 rounded-lg hover:border-primary transition-all hover:bg-surface-container-lowest group shadow-sm hover:shadow-md">
                    <span class="font-label-caps text-label-caps text-on-surface-variant block mb-6 uppercase tracking-widest text-[9px]">PHOTOGRAPHIE</span>
                    <div class="flex justify-between items-end mb-4">
                        <h3 class="font-headline-md text-headline-md text-primary">Lightroom</h3>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex-1 h-0.5 bg-surface-container-high">
                            <div class="h-full bg-primary transition-all duration-1000" style="width: 80%;"></div>
                        </div>
                        <span class="font-body-md text-primary font-bold text-xs">80%</span>
                    </div>
                </div>
                <!-- Premiere Pro Card -->
                <div class="p-8 border border-outline/10 rounded-lg hover:border-primary transition-all hover:bg-surface-container-lowest group shadow-sm hover:shadow-md">
                    <span class="font-label-caps text-label-caps text-on-surface-variant block mb-6 uppercase tracking-widest text-[9px]">MONTAGE VIDÉO</span>
                    <div class="flex justify-between items-end mb-4">
                        <h3 class="font-headline-md text-headline-md text-primary">Premiere</h3>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex-1 h-0.5 bg-surface-container-high">
                            <div class="h-full bg-primary transition-all duration-1000" style="width: 65%;"></div>
                        </div>
                        <span class="font-body-md text-primary font-bold text-xs">65%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Complementary Education Section -->
    <section class="bg-surface-container-low py-section-gap overflow-hidden">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div class="flex flex-col md:flex-row gap-20 items-center">
                <div class="w-full md:w-5/12 relative">
                    <div class="aspect-square bg-surface-dim rounded-lg overflow-hidden border border-outline/10 group shadow-2xl">
                        <img (click)="viewImage('https://lh3.googleusercontent.com/aida-public/AB6AXuDbLb-r1HEFiakWbUz86JsBff0x89DsIyAHduXjgMjNrD-ucQUDH1OEKavDssAMGInoEK-ZDwRc2S1VfdXBJN6QIYbCOZaKvMZq7mcB-lY7s_DEx8W0CavyH45RWFmGRFw6svOwi_SVYv7xYeQqrNHTms2Va5mjscY8SGFK71UuwfAW11cUWTYWxK5MYz1eYA2_1ihXxsl9hHvRQTbE8Zz4_u7JBq-d1nrsO3l-pg18Rah01ZgF_oU-Cy4iVLpS-j06r5uqWsRuUpP5')" alt="Formation Design" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 cursor-zoom-in" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbLb-r1HEFiakWbUz86JsBff0x89DsIyAHduXjgMjNrD-ucQUDH1OEKavDssAMGInoEK-ZDwRc2S1VfdXBJN6QIYbCOZaKvMZq7mcB-lY7s_DEx8W0CavyH45RWFmGRFw6svOwi_SVYv7xYeQqrNHTms2Va5mjscY8SGFK71UuwfAW11cUWTYWxK5MYz1eYA2_1ihXxsl9hHvRQTbE8Zz4_u7JBq-d1nrsO3l-pg18Rah01ZgF_oU-Cy4iVLpS-j06r5uqWsRuUpP5"/>
                    </div>
                    <div class="absolute -bottom-8 -right-8 bg-tertiary text-on-tertiary p-10 rounded-lg hidden lg:block shadow-xl">
                        <span class="font-display-lg text-6xl leading-none font-bold">2026</span>
                        <p class="font-label-caps text-label-caps mt-3 tracking-[.25em] opacity-80 uppercase text-[10px]">VISION FUTURE</p>
                    </div>
                </div>
                <div class="w-full md:w-7/12 space-y-16">
                    <div>
                        <h2 class="font-headline-lg text-headline-lg text-primary mb-6">Formations Complémentaires</h2>
                        <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            L'apprentissage continu est le fondement de ma pratique. Je m'investis dans des disciplines transversales pour enrichir mon approche architecturale.
                        </p>
                    </div>
                    <div class="space-y-12">
                        <div class="flex gap-8 items-start">
                            <div class="bg-primary/5 text-primary p-4 rounded-full border border-primary/10">
                                <span class="material-symbols-outlined text-2xl">brush</span>
                            </div>
                            <div>
                                <h4 class="font-body-lg text-body-lg font-bold text-primary">Design, Photo &amp; Vidéographie</h4>
                                <p class="font-label-caps text-label-caps text-tertiary uppercase tracking-widest text-[10px] mt-1 font-bold">KALIBWA | PROMOTION 2026</p>
                                <p class="font-body-md text-body-md mt-3 text-on-surface-variant leading-relaxed">
                                    Perfectionnement des techniques de capture d'espace et de narration visuelle pour valoriser chaque projet architectural.
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-8 items-start">
                            <div class="bg-primary/5 text-primary p-4 rounded-full border border-primary/10">
                                <span class="material-symbols-outlined text-2xl">construction</span>
                            </div>
                            <div>
                                <h4 class="font-body-lg text-body-lg font-bold text-primary">Ferraillage en structure de bâtiment</h4>
                                <p class="font-label-caps text-label-caps text-tertiary uppercase tracking-widest text-[10px] mt-1 font-bold">EXPERTISE TECHNIQUE</p>
                                <p class="font-body-md text-body-md mt-3 text-on-surface-variant leading-relaxed">
                                    Maîtrise approfondie des structures en béton armé, garantissant la pérennité et la sécurité des réalisations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap mb-12 reveal-item">
        <div class="bg-primary p-12 md:p-20 rounded-xl relative overflow-hidden shadow-2xl text-center">
            <div class="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
            <div class="relative z-10 space-y-10">
                <h2 class="font-headline-lg text-headline-lg text-on-primary">Prêt à concrétiser votre vision ?</h2>
                <p class="font-body-lg text-body-lg text-on-primary/70 max-w-2xl mx-auto leading-relaxed">
                    Mes compétences techniques sont au service de vos projets les plus ambitieux. Discutons de votre prochaine réalisation.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                    <a class="btn-primary bg-on-primary text-primary hover:bg-on-primary/90 px-10 py-5 rounded-none shadow-xl" routerLink="/realisation">
                        Voir mes Projets
                    </a>
                    <a class="btn-outline border-on-primary text-on-primary hover:bg-on-primary hover:text-primary px-10 py-5 rounded-none transition-all" href="#contact">
                        Me Contacter
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-section-gap bg-surface-container-highest">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 class="font-headline-lg text-headline-lg text-primary mb-8">Contactez-moi</h2>
                    <p class="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                        Une idée ? Un projet ? Discutons-en directement. Je suis à votre écoute pour transformer vos visions en structures tangibles.
                    </p>
                </div>
                <div class="bg-surface p-8 md:p-12 rounded-lg shadow-2xl border border-outline/5">
                    <form (ngSubmit)="submitForm()" class="space-y-8 text-left">
                        <div>
                            <label class="block font-label-caps text-label-caps text-primary mb-3">NOM COMPLET</label>
                            <input type="text" [(ngModel)]="name" name="name" required class="w-full bg-surface-container-low border border-outline/20 p-4 rounded-none focus:outline-none focus:border-primary transition-all">
                        </div>
                        <div>
                            <label class="block font-label-caps text-label-caps text-primary mb-3">EMAIL</label>
                            <input type="email" [(ngModel)]="email" name="email" required class="w-full bg-surface-container-low border border-outline/20 p-4 rounded-none focus:outline-none focus:border-primary transition-all">
                        </div>
                        <div>
                            <label class="block font-label-caps text-label-caps text-primary mb-3">VOTRE IDÉE DE PROJET</label>
                            <textarea [(ngModel)]="idea" name="idea" required rows="4" class="w-full bg-surface-container-low border border-outline/20 p-4 rounded-none focus:outline-none focus:border-primary transition-all"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-primary text-on-primary py-5 rounded-none font-bold hover:bg-primary/95 transition-all flex items-center justify-center gap-3 shadow-xl group">
                            Envoyer sur WhatsApp
                            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </main>
  `
})
export class Competences {
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
