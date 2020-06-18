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
    loadChildren: () => import('@cosmos/profile-page').then(m => m.ProfilePageModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: '',
    loadChildren: () => import('@cosmos/home-page').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
