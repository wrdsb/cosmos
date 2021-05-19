import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { CalendarSearchComponent } from './calendar-search/calendar-search.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';

import { MembershipsDefinitionsComponent } from "./memberships-definitions/memberships-definitions.component";
import { MembershipsOverridesComponent } from "./memberships-overrides/memberships-overrides.component";

const routes: Routes = [
  {
    path: 'memberships/definitions',
    component: MembershipsDefinitionsComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'memberships/overrides',
    component: MembershipsOverridesComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'search',
    component: CalendarSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'calendar:id',
    component: CalendarDetailComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: '',
    component: CalendarHomeComponent,
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
export class CalendarRoutingModule { }
