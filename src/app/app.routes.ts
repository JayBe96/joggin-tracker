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
  },
  {
    path: 'homescreen',
    loadComponent: () => import('./homescreen/homescreen.page').then(m => m.HomescreenPage)
  },
  {
    path: 'exercise',
    loadComponent: () => import('./exercise/exercise.page').then(m => m.ExercisePage)
  },
  {
    path: 'data',
    loadComponent: () => import('./data/data.page').then(m => m.DataPage)
  },
  {
    path: 'info',
    loadComponent: () => import('./info/info.page').then(m => m.InfoPage)
  }

];
