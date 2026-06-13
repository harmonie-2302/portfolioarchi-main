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
  coverUrl?: string;
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
  imageAnimating = false;

  /* ─── Panel Admin ─── */
  isAdminOpen = false;
  adminStep: 'group' | 'images' = 'group';

  newGroup: ProjectGroup = this.emptyGroup();
  newTechInput: string = '';
  newImageEntry: ProjectImage = { url: '', caption: '' };
  imagePreviewError = false;

  /* ─── 5 Domaines de réalisation ─── */
  projects: ProjectGroup[] = [
    // ─── COMMERCE ──────────────────────────────────────────────────────────
    {
      id: 'commerce',
      tag: 'COMMERCE',
      title: 'Espaces Commerciaux',
      description: `<p>Cet ensemble regroupe l'intégralité des projets et études réalisés dans le domaine : <strong>commerce</strong>.</p><p>Explorez une galerie complète de nos rendus 3D, plans de masse et photographies de chantiers (26 images).</p>`,
      tech: ['ArchiCAD', 'Lumion', 'Conception', 'Suivi de chantier'],
      images: [
        { url: 'assets/COMMERCE/1%20RENDU.png', caption: '1 RENDU' },
        { url: 'assets/COMMERCE/2%20RENDU.png', caption: '2 RENDU' },
        { url: 'assets/COMMERCE/3%20RENDU.png', caption: '3 RENDU' },
        { url: 'assets/COMMERCE/CDFR_1%20-%20Photo.jpg', caption: 'CDFR 1   Photo' },
        { url: 'assets/COMMERCE/CDFR_3%20-%20Photo.jpg', caption: 'CDFR 3   Photo' },
        { url: 'assets/COMMERCE/CDFR_4%20-%20Photo.jpg', caption: 'CDFR 4   Photo' },
        { url: 'assets/COMMERCE/DFRE_1%20-%20Photo.jpg', caption: 'DFRE 1   Photo' },
        { url: 'assets/COMMERCE/DFRE_2%20-%20Photo.jpg', caption: 'DFRE 2   Photo' },
        { url: 'assets/COMMERCE/DFRE_3%20-%20Photo.jpg', caption: 'DFRE 3   Photo' },
        { url: 'assets/COMMERCE/DFRE_5%20-%20Photo.jpg', caption: 'DFRE 5   Photo' },
        { url: 'assets/COMMERCE/DFRE_6%20-%20Photo.jpg', caption: 'DFRE 6   Photo' },
        { url: 'assets/COMMERCE/DFRE_7%20-%20Photo.jpg', caption: 'DFRE 7   Photo' },
        { url: 'assets/COMMERCE/DFRE_8%20-%20Photo.jpg', caption: 'DFRE 8   Photo' },
        { url: 'assets/COMMERCE/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_1%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 1   Photo' },
        { url: 'assets/COMMERCE/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_2%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 2   Photo' },
        { url: 'assets/COMMERCE/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_3%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 3   Photo' },
        { url: 'assets/COMMERCE/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_4%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 4   Photo' },
        { url: 'assets/COMMERCE/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_5%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 5   Photo' },
        { url: 'assets/COMMERCE/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_9%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 9   Photo' },
        { url: 'assets/COMMERCE/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_10%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 10   Photo' },
        { url: 'assets/COMMERCE/PAY%20PAY_11%20-%20Photo.jpg', caption: 'PAY PAY 11   Photo' },
        { url: 'assets/COMMERCE/PAY%20PAY_12%20-%20Photo.jpg', caption: 'PAY PAY 12   Photo' },
        { url: 'assets/COMMERCE/PAY%20PAY_14%20-%20Photo.jpg', caption: 'PAY PAY 14   Photo' },
        { url: 'assets/COMMERCE/PAY%20PAY_17%20-%20Photo.jpg', caption: 'PAY PAY 17   Photo' },
        { url: 'assets/COMMERCE/PAY%20PAY_19%20-%20Photo.jpg', caption: 'PAY PAY 19   Photo' },
        { url: 'assets/COMMERCE/PAY%20PAY_20%20-%20Photo.jpg', caption: 'PAY PAY 20   Photo' },
      ]
    },

    // ─── HÔTEL ──────────────────────────────────────────────────────────
    {
      id: 'hotel',
      tag: 'HÔTEL',
      title: 'Complexes Hôteliers',
      description: `<p>Cet ensemble regroupe l'intégralité des projets et études réalisés dans le domaine : <strong>hôtel</strong>.</p><p>Explorez une galerie complète de nos rendus 3D, plans de masse et photographies de chantiers (24 images).</p>`,
      tech: ['ArchiCAD', 'Lumion', 'Conception', 'Suivi de chantier'],
      images: [
        { url: 'assets/HOTEL/43T_1%20-%20Photo.jpg', caption: '43T 1   Photo' },
        { url: 'assets/HOTEL/43T_2%20-%20Photo.jpg', caption: '43T 2   Photo' },
        { url: 'assets/HOTEL/43T_3%20-%20Photo.jpg', caption: '43T 3   Photo' },
        { url: 'assets/HOTEL/43T_4%20-%20Photo.jpg', caption: '43T 4   Photo' },
        { url: 'assets/HOTEL/43T_5%20-%20Photo.jpg', caption: '43T 5   Photo' },
        { url: 'assets/HOTEL/43T_6%20-%20Photo.jpg', caption: '43T 6   Photo' },
        { url: 'assets/HOTEL/43T_7%20-%20Photo.jpg', caption: '43T 7   Photo' },
        { url: 'assets/HOTEL/43T_8%20-%20Photo.jpg', caption: '43T 8   Photo' },
        { url: 'assets/HOTEL/43T_9%20-%20Photo.jpg', caption: '43T 9   Photo' },
        { url: 'assets/HOTEL/der_4%20-%20Photo.jpg', caption: 'der 4   Photo' },
        { url: 'assets/HOTEL/der_5%20-%20Photo.jpg', caption: 'der 5   Photo' },
        { url: 'assets/HOTEL/der_6%20-%20Photo.jpg', caption: 'der 6   Photo' },
        { url: 'assets/HOTEL/JENI.jpg', caption: 'JENI' },
        { url: 'assets/HOTEL/Lumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_1%20-%20Photo.jpg', caption: 'Lumion 10 Pro 正版授权 1   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_1%20-%20Photo.jpg', caption: 'Lumion TD 1   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_2%20-%20Photo.jpg', caption: 'Lumion TD 2   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_3%20-%20Photo.jpg', caption: 'Lumion TD 3   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_4%20-%20Photo.jpg', caption: 'Lumion TD 4   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_5%20-%20Photo.jpg', caption: 'Lumion TD 5   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_6%20-%20Photo.jpg', caption: 'Lumion TD 6   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_7%20-%20Photo.jpg', caption: 'Lumion TD 7   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_8%20-%20Photo.jpg', caption: 'Lumion TD 8   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_9%20-%20Photo.jpg', caption: 'Lumion TD 9   Photo' },
        { url: 'assets/HOTEL/Lumion%20TD_10%20-%20Photo.jpg', caption: 'Lumion TD 10   Photo' },
      ]
    },

    // ─── RÉSIDENCE ──────────────────────────────────────────────────────────
    {
      id: 'residence',
      tag: 'RÉSIDENCE',
      title: 'Villas & Résidences',
      description: `<p>Cet ensemble regroupe l'intégralité des projets et études réalisés dans le domaine : <strong>résidence</strong>.</p><p>Explorez une galerie complète de nos rendus 3D, plans de masse et photographies de chantiers (146 images).</p>`,
      tech: ['ArchiCAD', 'Lumion', 'Conception', 'Suivi de chantier'],
      images: [
        { url: 'assets/RESIDENCE/1/DEFR_1%20-%20Photo.jpg', caption: 'DEFR 1   Photo' },
        { url: 'assets/RESIDENCE/1/DEFR_2%20-%20Photo.jpg', caption: 'DEFR 2   Photo' },
        { url: 'assets/RESIDENCE/1/DEFR_3%20-%20Photo.jpg', caption: 'DEFR 3   Photo' },
        { url: 'assets/RESIDENCE/1/DEFR_5%20-%20Photo.jpg', caption: 'DEFR 5   Photo' },
        { url: 'assets/RESIDENCE/1/DEFR_6%20-%20Photo.jpg', caption: 'DEFR 6   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_1%20-%20Photo.jpg', caption: 'RFJK 1   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_2%20-%20Photo.jpg', caption: 'RFJK 2   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_3%20-%20Photo.jpg', caption: 'RFJK 3   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_4%20-%20Photo.jpg', caption: 'RFJK 4   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_5%20-%20Photo.jpg', caption: 'RFJK 5   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_6%20-%20Photo.jpg', caption: 'RFJK 6   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_7%20-%20Photo.jpg', caption: 'RFJK 7   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_8%20-%20Photo.jpg', caption: 'RFJK 8   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_9%20-%20Photo.jpg', caption: 'RFJK 9   Photo' },
        { url: 'assets/RESIDENCE/2/RFJK_10%20-%20Photo.jpg', caption: 'RFJK 10   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_1%20-%20Photo.jpg', caption: 'BIG 1   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_2%20-%20Photo.jpg', caption: 'BIG 2   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_3%20-%20Photo.jpg', caption: 'BIG 3   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_4%20-%20Photo.jpg', caption: 'BIG 4   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_5%20-%20Photo.jpg', caption: 'BIG 5   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_6%20-%20Photo.jpg', caption: 'BIG 6   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_7%20-%20Photo.jpg', caption: 'BIG 7   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_8%20-%20Photo.jpg', caption: 'BIG 8   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_9%20-%20Photo.jpg', caption: 'BIG 9   Photo' },
        { url: 'assets/RESIDENCE/3/BIG_10%20-%20Photo.jpg', caption: 'BIG 10   Photo' },
        { url: 'assets/RESIDENCE/3/defr.jpg', caption: 'defr' },
        { url: 'assets/RESIDENCE/3/dsze_1%20-%20Photo.jpg', caption: 'dsze 1   Photo' },
        { url: 'assets/RESIDENCE/3/dsze_2%20-%20Photo.jpg', caption: 'dsze 2   Photo' },
        { url: 'assets/RESIDENCE/3/dsze_3%20-%20Photo.jpg', caption: 'dsze 3   Photo' },
        { url: 'assets/RESIDENCE/3/dsze_4%20-%20Photo.jpg', caption: 'dsze 4   Photo' },
        { url: 'assets/RESIDENCE/3/dsze_5%20-%20Photo.jpg', caption: 'dsze 5   Photo' },
        { url: 'assets/RESIDENCE/3/dsze_6%20-%20Photo.jpg', caption: 'dsze 6   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_1%20-%20Photo.jpg', caption: 'DEFR 1   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_2%20-%20Photo.jpg', caption: 'DEFR 2   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_3%20-%20Photo.jpg', caption: 'DEFR 3   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_4%20-%20Photo.jpg', caption: 'DEFR 4   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_5%20-%20Photo.jpg', caption: 'DEFR 5   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_6%20-%20Photo.jpg', caption: 'DEFR 6   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_7%20-%20Photo.jpg', caption: 'DEFR 7   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_8%20-%20Photo.jpg', caption: 'DEFR 8   Photo' },
        { url: 'assets/RESIDENCE/4/DEFR_9%20-%20Photo.jpg', caption: 'DEFR 9   Photo' },
        { url: 'assets/RESIDENCE/4/RTRLumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_8%20-%20Photo.jpg', caption: 'RTRLumion 10 Pro 正版授权 8   Photo' },
        { url: 'assets/RESIDENCE/4/RTRLumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_9%20-%20Photo.jpg', caption: 'RTRLumion 10 Pro 正版授权 9   Photo' },
        { url: 'assets/RESIDENCE/4/RTRLumion%2010%20Pro%20%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_10%20-%20Photo.jpg', caption: 'RTRLumion 10 Pro 正版授权 10   Photo' },
        { url: 'assets/RESIDENCE/4/ZZZZZZZZZZZZZZZZZZZ_8%20-%20Photo.jpg', caption: 'ZZZZZZZZZZZZZZZZZZZ 8   Photo' },
        { url: 'assets/RESIDENCE/4/ZZZZZZZZZZZZZZZZZZZ_9%20-%20Photo.jpg', caption: 'ZZZZZZZZZZZZZZZZZZZ 9   Photo' },
        { url: 'assets/RESIDENCE/4/ZZZZZZZZZZZZZZZZZZZ_10%20-%20Photo.jpg', caption: 'ZZZZZZZZZZZZZZZZZZZ 10   Photo' },
        { url: 'assets/RESIDENCE/5/ZRGEH_1%20-%20Photo.jpg', caption: 'ZRGEH 1   Photo' },
        { url: 'assets/RESIDENCE/5/ZRGEH_2%20-%20Photo.jpg', caption: 'ZRGEH 2   Photo' },
        { url: 'assets/RESIDENCE/5/ZRGEH_3%20-%20Photo.jpg', caption: 'ZRGEH 3   Photo' },
        { url: 'assets/RESIDENCE/5/ZRGEH_4%20-%20Photo.jpg', caption: 'ZRGEH 4   Photo' },
        { url: 'assets/RESIDENCE/5/ZRGEH_5%20-%20Photo.jpg', caption: 'ZRGEH 5   Photo' },
        { url: 'assets/RESIDENCE/5/ZRGEH_6%20-%20Photo.jpg', caption: 'ZRGEH 6   Photo' },
        { url: 'assets/RESIDENCE/5/ZRGEH_7%20-%20Photo.jpg', caption: 'ZRGEH 7   Photo' },
        { url: 'assets/RESIDENCE/6/EFR_1%20-%20Photo.jpg', caption: 'EFR 1   Photo' },
        { url: 'assets/RESIDENCE/6/EFR_2%20-%20Photo.jpg', caption: 'EFR 2   Photo' },
        { url: 'assets/RESIDENCE/6/EFR_3%20-%20Photo.jpg', caption: 'EFR 3   Photo' },
        { url: 'assets/RESIDENCE/6/EFR_4%20-%20Photo.jpg', caption: 'EFR 4   Photo' },
        { url: 'assets/RESIDENCE/6/EFR_5%20-%20Photo.jpg', caption: 'EFR 5   Photo' },
        { url: 'assets/RESIDENCE/6/EFR_6%20-%20Photo.jpg', caption: 'EFR 6   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_1%20-%20Photo.jpg', caption: 'DFRTC 1   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_2%20-%20Photo.jpg', caption: 'DFRTC 2   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_3%20-%20Photo.jpg', caption: 'DFRTC 3   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_4%20-%20Photo.jpg', caption: 'DFRTC 4   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_5%20-%20Photo.jpg', caption: 'DFRTC 5   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_6%20-%20Photo.jpg', caption: 'DFRTC 6   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_7%20-%20Photo.jpg', caption: 'DFRTC 7   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_8%20-%20Photo.jpg', caption: 'DFRTC 8   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_9%20-%20Photo.jpg', caption: 'DFRTC 9   Photo' },
        { url: 'assets/RESIDENCE/7/DFRTC_10%20-%20Photo.jpg', caption: 'DFRTC 10   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_1%20-%20Photo%20-%20Copie.jpg', caption: 'EDRFTG 1   Photo   Copie' },
        { url: 'assets/RESIDENCE/8/EDRFTG_1%20-%20Photo.jpg', caption: 'EDRFTG 1   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_2%20-%20Photo%20-%20Copie.jpg', caption: 'EDRFTG 2   Photo   Copie' },
        { url: 'assets/RESIDENCE/8/EDRFTG_2%20-%20Photo.jpg', caption: 'EDRFTG 2   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_3%20-%20Photo%20-%20Copie.jpg', caption: 'EDRFTG 3   Photo   Copie' },
        { url: 'assets/RESIDENCE/8/EDRFTG_3%20-%20Photo.jpg', caption: 'EDRFTG 3   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_4%20-%20Photo.jpg', caption: 'EDRFTG 4   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_5%20-%20Photo%20-%20Copie.jpg', caption: 'EDRFTG 5   Photo   Copie' },
        { url: 'assets/RESIDENCE/8/EDRFTG_5%20-%20Photo.jpg', caption: 'EDRFTG 5   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_6%20-%20Photo%20-%20Copie.jpg', caption: 'EDRFTG 6   Photo   Copie' },
        { url: 'assets/RESIDENCE/8/EDRFTG_6%20-%20Photo.jpg', caption: 'EDRFTG 6   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_7%20-%20Photo%20-%20Copie.jpg', caption: 'EDRFTG 7   Photo   Copie' },
        { url: 'assets/RESIDENCE/8/EDRFTG_7%20-%20Photo.jpg', caption: 'EDRFTG 7   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_8%20-%20Photo.jpg', caption: 'EDRFTG 8   Photo' },
        { url: 'assets/RESIDENCE/8/EDRFTG_9%20-%20Photo.jpg', caption: 'EDRFTG 9   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_1%20-%20Photo.jpg', caption: 'FEFR 1   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_2%20-%20Photo.jpg', caption: 'FEFR 2   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_4%20-%20Photo.jpg', caption: 'FEFR 4   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_5%20-%20Photo.jpg', caption: 'FEFR 5   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_7%20-%20Photo.jpg', caption: 'FEFR 7   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_8%20-%20Photo.jpg', caption: 'FEFR 8   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_9%20-%20Photo.jpg', caption: 'FEFR 9   Photo' },
        { url: 'assets/RESIDENCE/9/FEFR_10%20-%20Photo.jpg', caption: 'FEFR 10   Photo' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%201.jpg', caption: 'dav Photo   1' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%202.jpg', caption: 'dav Photo   2' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%203.jpg', caption: 'dav Photo   3' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%204.jpg', caption: 'dav Photo   4' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%205.jpg', caption: 'dav Photo   5' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%206.jpg', caption: 'dav Photo   6' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%207.jpg', caption: 'dav Photo   7' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%208.jpg', caption: 'dav Photo   8' },
        { url: 'assets/RESIDENCE/10/dav_Photo%20-%209.jpg', caption: 'dav Photo   9' },
        { url: 'assets/RESIDENCE/11/CCDR_11%20-%20Photo.jpg', caption: 'CCDR 11   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_12%20-%20Photo.jpg', caption: 'CCDR 12   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_13%20-%20Photo.jpg', caption: 'CCDR 13   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_14%20-%20Photo.jpg', caption: 'CCDR 14   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_15%20-%20Photo.jpg', caption: 'CCDR 15   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_16%20-%20Photo.jpg', caption: 'CCDR 16   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_17%20-%20Photo.jpg', caption: 'CCDR 17   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_18%20-%20Photo.jpg', caption: 'CCDR 18   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_19%20-%20Photo.jpg', caption: 'CCDR 19   Photo' },
        { url: 'assets/RESIDENCE/11/CCDR_20%20-%20Photo.jpg', caption: 'CCDR 20   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_1%20-%20Photo.jpg', caption: 'EDFR 1   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_2%20-%20Photo.jpg', caption: 'EDFR 2   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_3%20-%20Photo.jpg', caption: 'EDFR 3   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_4%20-%20Photo.jpg', caption: 'EDFR 4   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_5%20-%20Photo.jpg', caption: 'EDFR 5   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_6%20-%20Photo.jpg', caption: 'EDFR 6   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_7%20-%20Photo.jpg', caption: 'EDFR 7   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_8%20-%20Photo.jpg', caption: 'EDFR 8   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_9%20-%20Photo.jpg', caption: 'EDFR 9   Photo' },
        { url: 'assets/RESIDENCE/11/EDFR_10%20-%20Photo.jpg', caption: 'EDFR 10   Photo' },
        { url: 'assets/RESIDENCE/villa%20%C3%A0%20goma/goma%20villa_1%20-%20Photo.jpg', caption: 'goma villa 1   Photo' },
        { url: 'assets/RESIDENCE/villa%20%C3%A0%20goma/goma%20villa_2%20-%20Photo.jpg', caption: 'goma villa 2   Photo' },
        { url: 'assets/RESIDENCE/villa%20%C3%A0%20goma/goma%20villa_3%20-%20Photo.jpg', caption: 'goma villa 3   Photo' },
        { url: 'assets/RESIDENCE/villa%20%C3%A0%20goma/goma%20villa_4%20-%20Photo.jpg', caption: 'goma villa 4   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_11%20-%20Photo.jpg', caption: 'EXTERIEUR 11   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_12%20-%20Photo.jpg', caption: 'EXTERIEUR 12   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_13%20-%20Photo.jpg', caption: 'EXTERIEUR 13   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_14%20-%20Photo.jpg', caption: 'EXTERIEUR 14   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_15%20-%20Photo.jpg', caption: 'EXTERIEUR 15   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_16%20-%20Photo.jpg', caption: 'EXTERIEUR 16   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_17%20-%20Photo.jpg', caption: 'EXTERIEUR 17   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_18%20-%20Photo.jpg', caption: 'EXTERIEUR 18   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_19%20-%20Photo.jpg', caption: 'EXTERIEUR 19   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/EXTERIEUR_20%20-%20Photo.jpg', caption: 'EXTERIEUR 20   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_1%20-%20Photo.jpg', caption: 'INTERIEUR 1   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_2%20-%20Photo.jpg', caption: 'INTERIEUR 2   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_3%20-%20Photo.jpg', caption: 'INTERIEUR 3   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_4%20-%20Photo.jpg', caption: 'INTERIEUR 4   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_5%20-%20Photo.jpg', caption: 'INTERIEUR 5   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_6%20-%20Photo.jpg', caption: 'INTERIEUR 6   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_7%20-%20Photo.jpg', caption: 'INTERIEUR 7   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_8%20-%20Photo.jpg', caption: 'INTERIEUR 8   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_9%20-%20Photo.jpg', caption: 'INTERIEUR 9   Photo' },
        { url: 'assets/RESIDENCE/villa%20kashusha/INTERIEUR_10%20-%20Photo.jpg', caption: 'INTERIEUR 10   Photo' },
      ]
    },

    // ─── BÂTIMENT MULTIFONCTIONNEL ──────────────────────────────────────────────────────────
    {
      id: 'batiment-multifonctionnel',
      tag: 'BÂTIMENT MULTIFONCTIONNEL',
      title: 'Bâtiments Multifonctionnels',
      description: `<p>Cet ensemble regroupe l'intégralité des projets et études réalisés dans le domaine : <strong>bâtiment multifonctionnel</strong>.</p><p>Explorez une galerie complète de nos rendus 3D, plans de masse et photographies de chantiers (23 images).</p>`,
      tech: ['ArchiCAD', 'Lumion', 'Conception', 'Suivi de chantier'],
      images: [
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_2%20-%20Photo.jpg', caption: 'BHRU 2   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_3%20-%20Photo.jpg', caption: 'BHRU 3   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_6%20-%20Photo.jpg', caption: 'BHRU 6   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_7%20-%20Photo.jpg', caption: 'BHRU 7   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_8%20-%20Photo.jpg', caption: 'BHRU 8   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/BHRU_9%20-%20Photo.jpg', caption: 'BHRU 9   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/CFDR_1%20-%20Photo.jpg', caption: 'CFDR 1   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/GTYHUJ_1%20-%20Photo.jpg', caption: 'GTYHUJ 1   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/b%C3%A2timent%20multi%20fonctionnel/TGQT_1%20-%20Photo.jpg', caption: 'TGQT 1   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_1%20-%20Photo.jpg', caption: 'rcfz 1   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_2%20-%20Photo.jpg', caption: 'rcfz 2   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_3%20-%20Photo.jpg', caption: 'rcfz 3   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/rcfz_4%20-%20Photo.jpg', caption: 'rcfz 4   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_1%20-%20Photo.jpg', caption: 'RJUKH 1   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_2%20-%20Photo.jpg', caption: 'RJUKH 2   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_3%20-%20Photo.jpg', caption: 'RJUKH 3   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_4%20-%20Photo.jpg', caption: 'RJUKH 4   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_5%20-%20Photo.jpg', caption: 'RJUKH 5   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_6%20-%20Photo.jpg', caption: 'RJUKH 6   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_7%20-%20Photo.jpg', caption: 'RJUKH 7   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_8%20-%20Photo.jpg', caption: 'RJUKH 8   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_9%20-%20Photo.jpg', caption: 'RJUKH 9   Photo' },
        { url: 'assets/BATIMENT%20MULTIFONCTIONNEL/Projet%20commerce%2C%20%C3%A9glise%20et%20%C3%A9cole%20pour%20la%20comm.%20de%20Grace/RJUKH_10%20-%20Photo.jpg', caption: 'RJUKH 10   Photo' },
      ]
    },

    // ─── UNIVERSITAIRE ──────────────────────────────────────────────────────────
    {
      id: 'universitaire',
      tag: 'UNIVERSITAIRE',
      title: 'Infrastructures Universitaires',
      description: `<p>Cet ensemble regroupe l'intégralité des projets et études réalisés dans le domaine : <strong>universitaire</strong>.</p><p>Explorez une galerie complète de nos rendus 3D, plans de masse et photographies de chantiers (5 images).</p>`,
      tech: ['ArchiCAD', 'Lumion', 'Conception', 'Suivi de chantier'],
      images: [
        { url: 'assets/UNIVERSITAIRE/1/RFED_2%20-%20Photo.jpg', caption: 'RFED 2   Photo' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_3%20-%20Photo.jpg', caption: 'RFED 3   Photo' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_4%20-%20Photo.jpg', caption: 'RFED 4   Photo' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_5%20-%20Photo.jpg', caption: 'RFED 5   Photo' },
        { url: 'assets/UNIVERSITAIRE/1/RFED_6%20-%20Photo.jpg', caption: 'RFED 6   Photo' },
      ]
    }
  ];

  /* ─── Helpers ─── */
  emptyGroup(): ProjectGroup {
    return { id: '', tag: '', title: '', description: '', tech: [], images: [], coverUrl: '' };
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

  closeAdmin() { this.isAdminOpen = false; }

  goToImagesStep() {
    if (!this.newGroup.tag || !this.newGroup.title) return;
    if (this.newTechInput.trim()) {
      this.newGroup.tech = this.newTechInput.split(',').map((t: string) => t.trim()).filter((t: string) => t);
    }
    this.newGroup.id = this.generateId(this.newGroup.title);
    this.adminStep = 'images';
  }

  generateId(title: string): string {
    return title.toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-').replace(/^-|-$/g, '') + '-' + Date.now();
  }

  addImageToGroup() {
    if (!this.newImageEntry.url || !this.newImageEntry.caption) return;
    this.newGroup.images.push({ ...this.newImageEntry });
    this.newImageEntry = { url: '', caption: '' };
    this.imagePreviewError = false;
  }

  removeImageFromGroup(index: number) { this.newGroup.images.splice(index, 1); }

  saveGroup() {
    if (this.newGroup.images.length === 0) return;
    if (!this.newGroup.description.startsWith('<')) {
      this.newGroup.description = `<p>${this.newGroup.description}</p>`;
    }
    this.projects.unshift({ ...this.newGroup });
    this.isAdminOpen = false;
    this.newGroup = this.emptyGroup();
  }

  deleteProject(id: string) {
    this.projects = this.projects.filter(p => p.id !== id);
    if (this.isModalOpen && this.currentProject?.id === id) this.closeModal();
  }

  onImagePreviewError() { this.imagePreviewError = true; }
  onImagePreviewLoad()  { this.imagePreviewError = false; }

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
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  submitForm() {
    if (this.name && this.email && this.idea) {
      const message = `Bonjour David, je suis ${this.name} (${this.email}). J'ai une idée de projet : ${this.idea}`;
      window.open(`https://wa.me/243854832846?text=${encodeURIComponent(message)}`, '_blank');
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.isAdminOpen) { if (event.key === 'Escape') this.closeAdmin(); return; }
    if (!this.isModalOpen) return;
    if (event.key === 'ArrowRight') this.nextProjectImage();
    if (event.key === 'ArrowLeft')  this.prevProjectImage();
    if (event.key === 'Escape')     this.closeModal();
  }
}
