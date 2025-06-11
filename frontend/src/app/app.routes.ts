import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home-benvenuto',
    loadComponent: () => import('./pages/home-benvenuto/home-benvenuto.page').then( m => m.HomeBenvenutoPage)
  },
  {
    path: 'registrazione',
    loadComponent: () => import('./pages/registrazione/registrazione.page').then( m => m.RegistrazionePage)
  },
];
