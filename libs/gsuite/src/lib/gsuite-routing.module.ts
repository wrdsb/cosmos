import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { GSuiteHomeComponent } from "./gsuite-home/gsuite-home.component";

const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () => import('@cosmos/google-calendar').then(m => m.GoogleCalendarModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'groups',
    loadChildren: () => import('@cosmos/google-groups').then(m => m.GoogleGroupsModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: '',
    component: GSuiteHomeComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GSuiteRoutingModule { }
