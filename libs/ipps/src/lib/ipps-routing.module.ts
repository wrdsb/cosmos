import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { IPPSHomeComponent } from "./ipps-home/ipps-home.component";

import { EmployeeGroupsSearchComponent } from "./employee-groups-search/employee-groups-search.component";
import { JobsSearchComponent } from "./jobs-search/jobs-search.component";
import { LocationsSearchComponent } from "./locations-search/locations-search.component";
import { PeopleSearchComponent } from "./people-search/people-search.component";
import { AdminTransfersComponent } from "./admin-transfers/admin-transfers.component";

const routes: Routes = [
  { 
    path: 'employee-groups',
    component: EmployeeGroupsSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'jobs',
    component: JobsSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'locations',
    component: LocationsSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'people',
    component: PeopleSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'transfers',
    component: AdminTransfersComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: '',
    component: IPPSHomeComponent,
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

export class IppsRoutingModule { }
