import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Parcours } from './pages/parcours/parcours';
import { Realisation } from './pages/realisation/realisation';
import { Competences } from './pages/competences/competences';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'parcours', component: Parcours },
  { path: 'realisation', component: Realisation },
  { path: 'competences', component: Competences },
  { path: '**', redirectTo: '' }
];
