import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.component').then(m => m.TabsComponent),
    canActivate: [AuthGuard], // Protect the 'tabs' route
    children: [
      {
        path: 'exercise',
        loadComponent: () => import('./exercise/exercise.page').then(m => m.ExercisePage),
        canActivate: [AuthGuard] // Protect the 'exercise' route
      },
      {
        path: 'data',
        loadComponent: () => import('./data/data.page').then(m => m.DataPage),
        canActivate: [AuthGuard] // Protect the 'data' route
      },
      {
        path: 'homescreen',
        loadComponent: () => import('./homescreen/homescreen.page').then(m => m.HomescreenPage),
        canActivate: [AuthGuard] // Protect the 'homescreen' route
      },
      {
        path: 'menu',
        children: [
          {
            path: 'info',
            loadComponent: () => import('./info/info.page').then(m => m.InfoPage),
            canActivate: [AuthGuard] // Protect the 'info' route
          }
        ]
      }
    ]
  }
];
