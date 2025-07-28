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
  {
    path: 'profilo-utente',
    loadComponent: () => import('./pages/profilo-utente/profilo-utente.page').then( m => m.ProfiloUtentePage)
  },
  {
    path: 'modifica-profilo',
    loadComponent: () => import('./pages/modifica-profilo/modifica-profilo.page').then( m => m.ModificaProfiloPage)
  },
  {
    path: 'modifica-lingua',
    loadComponent: () => import('./pages/modifica-lingua/modifica-lingua.page').then( m => m.ModificaLinguaPage)
  },

  {
    path: 'modifica-notifiche',
    loadComponent: () => import('./pages/modifica-notifiche/modifica-notifiche.page').then( m => m.ModificaNotifichePage)
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.page').then( m => m.FaqPage)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.page').then( m => m.PrivacyPage)
  },
  {
    path: 'header-impostazioni',
    loadComponent: () => import('./component/header-impostazioni/header-impostazioni.page').then( m => m.HeaderImpostazioniPage)
  },



  /*{
    path: 'area-benessere',
    loadComponent: () => import('./pages/area-benessere/area-benessere.page').then( m => m.AreaBenesserePage)
  }
  {
  path: 'obiettivi',
  loadComponent: () =>
      import('./pages/obiettivi/obiettivi.page').then(m => m.ObiettiviPage)
  },
  {
  path: 'meditazione',
  loadComponent: () => import('./pages/meditazione/meditazione.page').then(m => m.MeditazionePage)
  },
  {
  path: 'body-scan',
  loadComponent: () => import('./pages/body-scan/body-scan.page').then(m => m.BodyScanPage)
  },

  {
  path: 'player',
  loadComponent: () => import('./pages/player/player.page').then( m => m.PlayerPage)
},
{
  path: 'community',
  loadComponent: () => import('./pages/community/community.page').then( m => m.CommunityPage)
  },
  {
  path: 'diario',
  loadComponent: () => import('./pages/diario/diario.page').then( m => m.DiarioPage)
  },
  {
  path: 'respira',
  loadComponent: () => import('./pages/respira/respira.page').then( m => m.RespiraPage)
  },
  */
];
