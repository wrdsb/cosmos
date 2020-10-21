import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

const routes: Routes = [
  {
    path: 'ping',
    loadChildren: () => import('@cosmos/pings').then(m => m.PingsModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'google',
    loadChildren: () => import('@cosmos/google').then(m => m.GoogleModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
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
    path: 'releases',
    loadChildren: () => import('@cosmos/releases').then(m => m.ReleasesModule),
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
