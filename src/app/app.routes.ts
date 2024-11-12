import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },  {
    path: 'homescreen',
    loadComponent: () => import('./homescreen/homescreen.page').then( m => m.HomescreenPage)
  },

];
