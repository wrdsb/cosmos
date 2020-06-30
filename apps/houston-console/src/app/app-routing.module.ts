import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

//const adminOnly = () => hasCustomClaim('admin');
//const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

// TODO: redirect logged in users to home when they access login page
//const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

//const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: 'google/groups',
    loadChildren: () => import('@cosmos/google-groups').then(m => m.GoogleGroupsModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'loops',
    loadChildren: () => import('@cosmos/signalr-loops').then(m => m.SignalrLoopsModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: '',
    loadChildren: () => import('@cosmos/pages').then(m => m.PagesModule)
  },
  {
    path: '**',
    loadChildren: () => import('@cosmos/pages').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
