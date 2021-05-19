import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { GroupsSearchComponent } from './groups-search/groups-search.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

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
    component: GroupsSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  {
    path: 'group/:id',
    component: GroupDetailComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: '',
    component: GroupsHomeComponent,
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
export class GoogleGroupsRoutingModule { }
