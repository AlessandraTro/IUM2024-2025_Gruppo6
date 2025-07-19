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
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'contenuti',
    loadComponent: () => import('./pages/contenuti/contenuti.page').then( m => m.ContenutiPage)
  },
  {
    path: 'recupero-password',
    loadComponent: () => import('./pages/recupero-password/recupero-password.page').then( m => m.RecuperoPasswordPage)
  },
  {
    path: 'nuova-password',
    loadComponent: () => import('./pages/nuova-password/nuova-password.page').then( m => m.NuovaPasswordPage)
  },
  {
    path: 'progressi',
    loadComponent: () => import('./pages/progressi/progressi.page').then( m => m.ProgressiPage)
  },
  {
    path: 'sound-escape',
    loadComponent: () => import('./pages/sound-escape/sound-escape.page').then( m => m.SoundEscapePage)
  },
  {
    path: 'sound/:pageKey',
    loadComponent: () => import('./pages/sound/sound.page').then(m => m.SoundPage)
  },
  /*{
    path: 'profilo-utente',
    loadComponent: () => import('./pages/profilo-utente/profilo-utente.page').then( m => m.ProfiloUtentePage)
  },
  {
    path: 'modifica-profilo',
    loadComponent: () => import('./pages/modifica-profilo/modifica-profilo.page').then( m => m.ModificaProfiloPage)
  },*/
  /*{
    path: 'area-benessere',
    loadComponent: () => import('./pages/area-benessere/area-benessere.page').then( m => m.AreaBenesserePage)
  }*/
];
