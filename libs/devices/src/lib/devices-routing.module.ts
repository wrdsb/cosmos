import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { DevicesHomeComponent } from "./home/devices-home.component";
import { DeviceLoansDashboardComponent } from "./device-loans-dashboard/device-loans-dashboard.component";
import { DeviceLoansSearchComponent } from "./device-loans-search/device-loans-search.component";
import { AssetsSearchComponent } from './assets-search/assets-search.component';

const routes: Routes = [
  { 
    path: 'assets/search',
    component: AssetsSearchComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
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
