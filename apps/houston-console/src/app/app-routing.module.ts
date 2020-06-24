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
    loadChildren: () => import('./google-groups/google-groups.module').then(m => m.GoogleGroupsModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'loops',
    loadChildren: () => import('./loops/loops.module').then(m => m.LoopsModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: '',
    loadChildren: () => import('@cosmos/home-page').then(m => m.HomePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('@cosmos/not-found-page').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
