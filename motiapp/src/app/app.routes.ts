import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: '', redirectTo: '/profile' }, // Redirect ไปยัง Profile
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.routes').then(m => m.PROFILE_ROUTES) },

];
