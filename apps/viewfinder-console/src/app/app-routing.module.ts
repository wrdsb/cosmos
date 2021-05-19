import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { RolesGuard } from "@cosmos/guards";
import { FailedComponent } from './failed/failed.component';

const routes: Routes = [
  {
    path: 'aad',
    loadChildren: () => import('@cosmos/aad').then(m => m.AadModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'ats',
    loadChildren: () => import('@cosmos/ats').then(m => m.AtsModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'device-loans',
    loadChildren: () => import('@cosmos/devices').then(m => m.DevicesModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'google',
    loadChildren: () => import('@cosmos/screens/google/google').then(m => m.GoogleModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'ipps',
    loadChildren: () => import('@cosmos/screens/ipps').then(m => m.IppsModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'ping',
    loadChildren: () => import('@cosmos/pings-ui').then(m => m.PingsUiModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'people',
    loadChildren: () => import('@cosmos/people').then(m => m.PeopleModule),
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
    path: 'quartermaster',
    loadChildren: () => import('@cosmos/quartermaster').then(m => m.QuartermasterModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
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
    path: 'schools',
    loadChildren: () => import('@cosmos/schools').then(m => m.SchoolsModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'teamviewer',
    loadChildren: () => import('@cosmos/teamviewer').then(m => m.TeamviewerModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'trillium',
    loadChildren: () => import('@cosmos/trillium').then(m => m.TrilliumModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
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
