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
    loadChildren: () => import('@cosmos/user-profiles').then(m => m.UserProfilesModule),
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

  //{ path: 'admin',        component: AdminComponent,    ...canActivate(adminOnly) },
  //{ path: 'accounts/:id', component: AdminComponent,    ...canActivate(belongsToAccount) }

  //{ path: 'login',        component: LoginPageComponent,  ...canActivate(redirectLoggedInToHome) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
