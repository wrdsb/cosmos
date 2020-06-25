import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { 
    path: 'people-set-definitions',
    loadChildren: () => import('@cosmos/people-sets').then(m => m.PeopleSetDefinitionsModule),
    canActivate: [
      MsalGuard
    ]
  },
  { 
    path: 'people-set-memberships',
    loadChildren: () => import('@cosmos/people-sets').then(m => m.PeopleSetMembershipsModule),
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
