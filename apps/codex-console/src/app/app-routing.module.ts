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
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'profile',
    loadChildren: () => import('@cosmos/profile-page').then(m => m.ProfilePageModule),
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

  //{ path: 'admin',        component: AdminComponent,    ...canActivate(adminOnly) },
  //{ path: 'accounts/:id', component: AdminComponent,    ...canActivate(belongsToAccount) }

  //{ path: 'login',        component: LoginPageComponent,  ...canActivate(redirectLoggedInToHome) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
