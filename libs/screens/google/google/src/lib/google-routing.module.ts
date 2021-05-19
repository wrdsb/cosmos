import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { GoogleHomeComponent } from "./google-home/google-home.component";
import { GoogleDashboardComponent } from "./google-dashboard/google-dashboard.component";

const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () => import('@cosmos/screens/google/calendar').then(m => m.CalendarModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'groups',
    loadChildren: () => import('@cosmos/screens/google/groups').then(m => m.GroupsModule),
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'dashboard',
    component: GoogleDashboardComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'home',
    component: GoogleHomeComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: '',
    component: GoogleHomeComponent,
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

export class GoogleRoutingModule { }
