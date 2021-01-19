import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { DevicesHomeComponent } from "./home/devices-home.component";
import { DeviceLoansDashboardComponent } from "./device-loans-dashboard/device-loans-dashboard.component";
import { DeviceLoansSearchComponent } from "./device-loans-search/device-loans-search.component";

const routes: Routes = [
  { 
    path: 'device-loans/dashboard',
    component: DeviceLoansDashboardComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'device-loans/search',
    component: DeviceLoansSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: '',
    component: DevicesHomeComponent,
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

export class DevicesRoutingModule { }
