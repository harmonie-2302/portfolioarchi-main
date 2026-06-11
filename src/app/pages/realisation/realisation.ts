import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ProjectGroup {
  id: string;
  tag: string;
  title: string;
  description: string;
  tech: string[];
  images: ProjectImage[];
  coverUrl?: string; // première image affichée en vignette
}

@Component({
  selector: 'app-realisation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './realisation.html',
  styleUrl: './realisation.css'
})
export class Realisation {
  name: string = '';
  email: string = '';
  idea: string = '';

  /* ─── Modal de visualisation ─── */
  isModalOpen = false;
  currentProject: ProjectGroup | null = null;
  currentImgIndex: number = 0;
  imageAnimating = false;   // déclenche l'animation CSS

  /* ─── Panel Admin ─── */
  isAdminOpen = false;
  adminStep: 'group' | 'images' = 'group';

  // Données du nouveau groupe
  newGroup: ProjectGroup = this.emptyGroup();
  newTechInput: string = '';

  // Image en cours d'ajout
  newImageEntry: ProjectImage = { url: '', caption: '' };
  imagePreviewError = false;

  /* ─── Données des projets ─── */
  projects: ProjectGroup[] = [
    {
      id: 'daa',
      tag: 'PORTFOLIO PERSONNEL',
      title: 'David Amisi Abecha',
      description: '<p>Réalisations architecturales marquantes showcasing technical mastery et innovative design thinking.</p>',
      tech: ['Conception', 'Gestion de Projet', 'Innovation'],
      images: [
        { url: 'assets/DAA/DAA.jpg', caption: 'Portfolio Principal' }
      ]
    },
    {
      id: 'commerce',
      tag: 'COMMERCE',
      title: 'Espaces Commerciaux & Boutiques',
      description: "<p>Conception d'espaces commerciaux optimisés pour l'expérience client et la rentabilité spatiale.</p>",
      tech: ['Lumion', 'ArchiCAD'],
      images: [
        { url: 'assets/COMMERCE/1%20RENDU.png', caption: 'Vue générée de la conception (1)' },
        { url: 'assets/COMMERCE/2%20RENDU.png', caption: 'Vue générée de la conception (2)' },
        { url: 'assets/COMMERCE/3%20RENDU.png', caption: 'Vue générée de la conception (3)' },
        { url: 'assets/COMMERCE/CDFR_1%20-%20Photo.jpg', caption: 'Vue CDFR_1' },
        { url: 'assets/COMMERCE/CDFR_3%20-%20Photo.jpg', caption: 'Vue CDFR_3' },
        { url: 'assets/COMMERCE/CDFR_4%20-%20Photo.jpg', caption: 'Vue CDFR_4' },
        { url: 'assets/COMMERCE/DFRE_1%20-%20Photo.jpg', caption: 'Vue DFRE_1' },
        { url: 'assets/COMMERCE/DFRE_2%20-%20Photo.jpg', caption: 'Vue DFRE_2' },
        { url: 'assets/COMMERCE/DFRE_3%20-%20Photo.jpg', caption: 'Vue DFRE_3' }
      ]
    },
    {
      id: 'racines',
      tag: 'HÉRITAGE CULTUREL',
      title: 'Racines de la Volonté',
      description: "<p>Un projet reflétant l'ancrage culturel et architectural, transformant les fondements traditionnels en structures contemporaines.</p>",
      tech: ['Urbanisme', 'Patrimoine', 'Innovation'],
      images: [
        { url: 'assets/UNIVERSITAIRE/1/RFED_2%20-%20Photo.jpg', caption: 'Vue du Concept' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_3%20-%20Photo.jpg', caption: 'Détail Architectural' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_4%20-%20Photo.jpg', caption: 'Intégration Spatiale' }
      ]
    },
    {
      id: 'obscurite',
      tag: 'EXPLORATION URBAINE',
      title: "L'Obscurité d'Olimba",
      description: '<p>Une expérience architecturale explorant les contrastes lumière-ombre et la transformation urbaine contemporaine.</p>',
      tech: ['Lumion', 'Rendu 3D', 'Analyse Urbaine'],
      images: [
        { url: 'assets/COMMERCE/PAY%20PAY_11%20-%20Photo.jpg', caption: 'Vue Nocturne (1)' },
        { url: 'assets/COMMERCE/PAY%20PAY_12%20-%20Photo.jpg', caption: 'Vue Nocturne (2)' },
        { url: 'assets/COMMERCE/PAY%20PAY_14%20-%20Photo.jpg', caption: 'Détail Illumination' }
      ]
    },
    {
      id: 'universitaire',
      tag: 'UNIVERSITAIRE',
      title: 'Infrastructures Académiques',
      description: "<p>Des espaces d'apprentissage stimulants et ergonomiques favorisant l'excellence académique.</p>",
      tech: ['Urbanisme', 'ArchiCAD', 'Structure'],
      images: [
        { url: 'assets/UNIVERSITAIRE/1/RFED_2%20-%20Photo.jpg', caption: 'Vue RFED_2' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_3%20-%20Photo.jpg', caption: 'Vue RFED_3' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_4%20-%20Photo.jpg', caption: 'Vue RFED_4' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_5%20-%20Photo.jpg', caption: 'Vue RFED_5' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_6%20-%20Photo.jpg', caption: 'Vue RFED_6' }
      ]
    },
    {
      id: 'multifonctionnel',
      tag: 'BÂTIMENT MULTIFONCTIONNEL',
      title: 'Complexes Multifonctionnels',
      description: '<p>Des structures polyvalentes intégrant différentes fonctions (bureaux, commerces, services) de manière harmonieuse.</p>',
      tech: ['Analyse Spatiale', 'ArchiCAD', 'Lumion'],
      images: [
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_2%20-%20Photo.jpg', caption: 'Vue BHRU_2' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_3%20-%20Photo.jpg', caption: 'Vue BHRU_3' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_6%20-%20Photo.jpg', caption: 'Vue BHRU_6' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_7%20-%20Photo.jpg', caption: 'Vue BHRU_7' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_8%20-%20Photo.jpg', caption: 'Vue BHRU_8' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_9%20-%20Photo.jpg', caption: 'Vue BHRU_9' }
      ]
    },
    {
      id: 'communautaire',
      tag: 'COMMUNAUTAIRE',
      title: 'Projets Communautaires',
      description: '<p>Complexes intégrant église, école et centres de santé pour le service de la communauté.</p>',
      tech: ['Urbanisme', 'ArchiCAD', 'Gestion de Chantier'],
      images: [
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_1%20-%20Photo.jpg', caption: 'Vue rcfz_1' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_2%20-%20Photo.jpg', caption: 'Vue rcfz_2' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_3%20-%20Photo.jpg', caption: 'Vue rcfz_3' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_4%20-%20Photo.jpg', caption: 'Vue rcfz_4' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_1%20-%20Photo.jpg', caption: 'Vue RJUKH_1' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_2%20-%20Photo.jpg', caption: 'Vue RJUKH_2' }
      ]
    }
  ];

  /* ─── Helpers ─── */
  emptyGroup(): ProjectGroup {
    return {
      id: '',
      tag: '',
      title: '',
      description: '',
      tech: [],
      images: [],
      coverUrl: ''
    };
  }

  getCoverUrl(project: ProjectGroup): string {
    if (project.coverUrl) return project.coverUrl;
    return project.images.length > 0 ? project.images[0].url : '';
  }

  /* ─── Admin Panel ─── */
  openAdmin() {
    this.newGroup = this.emptyGroup();
    this.newTechInput = '';
    this.newImageEntry = { url: '', caption: '' };
    this.adminStep = 'group';
    this.isAdminOpen = true;
  }

  closeAdmin() {
    this.isAdminOpen = false;
  }

  goToImagesStep() {
    if (!this.newGroup.tag || !this.newGroup.title) return;
    // Convertir technologies
    if (this.newTechInput.trim()) {
      this.newGroup.tech = this.newTechInput.split(',').map(t => t.trim()).filter(t => t);
    }
    this.newGroup.id = this.generateId(this.newGroup.title);
    this.adminStep = 'images';
  }

  generateId(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      + '-' + Date.now();
  }

  addImageToGroup() {
    if (!this.newImageEntry.url || !this.newImageEntry.caption) return;
    this.newGroup.images.push({ ...this.newImageEntry });
    this.newImageEntry = { url: '', caption: '' };
    this.imagePreviewError = false;
  }

  removeImageFromGroup(index: number) {
    this.newGroup.images.splice(index, 1);
  }

  saveGroup() {
    if (this.newGroup.images.length === 0) return;
    // Construire description HTML si besoin
    if (!this.newGroup.description.startsWith('<')) {
      this.newGroup.description = `<p>${this.newGroup.description}</p>`;
    }
    this.projects.unshift({ ...this.newGroup });
    this.isAdminOpen = false;
    this.newGroup = this.emptyGroup();
  }

  deleteProject(id: string) {
    this.projects = this.projects.filter(p => p.id !== id);
    if (this.isModalOpen && this.currentProject?.id === id) {
      this.closeModal();
    }
  }

  onImagePreviewError() {
    this.imagePreviewError = true;
  }

  onImagePreviewLoad() {
    this.imagePreviewError = false;
  }

  /* ─── Modal Visualisation ─── */
  openProject(project: ProjectGroup) {
    this.currentProject = project;
    this.currentImgIndex = 0;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
    this.updateModalGallery();
  }

  updateModalGallery() {
    this.imageAnimating = false;
    // micro-délai pour relancer l'animation CSS à chaque changement
    setTimeout(() => { this.imageAnimating = true; }, 10);
  }

  nextProjectImage() {
    if (!this.currentProject) return;
    this.currentImgIndex = (this.currentImgIndex + 1) % this.currentProject.images.length;
    this.updateModalGallery();
  }

  prevProjectImage() {
    if (!this.currentProject) return;
    this.currentImgIndex = (this.currentImgIndex - 1 + this.currentProject.images.length) % this.currentProject.images.length;
    this.updateModalGallery();
  }

  goToProjectImage(index: number) {
    this.currentImgIndex = index;
    this.updateModalGallery();
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentProject = null;
    document.body.style.overflow = '';
  }

  closeAndGoToContact() {
    this.closeModal();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  submitForm() {
    if (this.name && this.email && this.idea) {
      const message = `Bonjour David, je suis ${this.name} (${this.email}). J'ai une idée de projet : ${this.idea}`;
      window.open(`https://wa.me/243854832846?text=${encodeURIComponent(message)}`, '_blank');
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.isAdminOpen) {
      if (event.key === 'Escape') this.closeAdmin();
      return;
    }
    if (!this.isModalOpen) return;
    if (event.key === 'ArrowRight') this.nextProjectImage();
    if (event.key === 'ArrowLeft') this.prevProjectImage();
    if (event.key === 'Escape') this.closeModal();
  }
}
