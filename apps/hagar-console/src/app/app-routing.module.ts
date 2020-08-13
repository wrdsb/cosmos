import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

const routes: Routes = [
  {
    path: 'aad/groups',
    loadChildren: () => import('@cosmos/aad-groups').then(m => m.AADGroupsModule),
    data: {
      roles: ['cosmos-superuser']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'aad/users',
    loadChildren: () => import('@cosmos/aad-users').then(m => m.AADUsersModule),
    data: {
      roles: ['fake']
    },
    canActivate: [
      MsalGuard, RolesGuard
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
