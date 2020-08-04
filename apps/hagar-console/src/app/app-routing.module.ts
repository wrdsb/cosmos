import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { AADGroupsAllComponent } from "./aad-groups-all/aad-groups-all.component";
import { AADUsersAllComponent } from "./aad-users-all/aad-users-all.component";

const routes: Routes = [
  {
    path: 'groups',
    component: AADGroupsAllComponent
  },
  {
    path: 'users',
    component: AADUsersAllComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
