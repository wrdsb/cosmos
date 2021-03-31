import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { RolesGuard } from "@cosmos/guards";
import { FailedComponent } from './failed/failed.component';

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

const isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Remove this line to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
