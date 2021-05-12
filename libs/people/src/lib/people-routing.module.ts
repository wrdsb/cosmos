import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { RolesGuard } from "@cosmos/guards";

import { HomeComponent } from './home/home.component';

import { PeopleBySchoolComponent } from './people-by-school/people-by-school.component';

import { AllPrincipalsComponent } from './all-principals/all-principals.component';
import { ElementaryPrincipalsComponent } from './elementary-principals/elementary-principals.component';
import { SecondaryPrincipalsComponent } from './secondary-principals/secondary-principals.component';

import { AllSchoolAdminComponent } from './all-school-admin/all-school-admin.component';
import { ElementarySchoolAdminComponent } from './elementary-school-admin/elementary-school-admin.component';
import { SecondarySchoolAdminComponent } from './secondary-school-admin/secondary-school-admin.component';

import { AllFirstSecretariesComponent } from './all-first-secretaries/all-first-secretaries.component';
import { ElementaryFirstSecretariesComponent } from './elementary-first-secretaries/elementary-first-secretaries.component';
import { SecondaryFirstSecretariesComponent } from './secondary-first-secretaries/secondary-first-secretaries.component';

const routes: Routes = [
  { 
    path: 'people-by-school',
    component: PeopleBySchoolComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'all-principals',
    component: AllPrincipalsComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'elementary-principals',
    component: ElementaryPrincipalsComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'secondary-principals',
    component: SecondaryPrincipalsComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'all-school-admin',
    component: AllSchoolAdminComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'elementary-school-admin',
    component: ElementarySchoolAdminComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'secondary-school-admin',
    component: SecondarySchoolAdminComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'all-first-secretaries',
    component: AllFirstSecretariesComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'elementary-first-secretaries',
    component: ElementaryFirstSecretariesComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: 'secondary-first-secretaries',
    component: SecondaryFirstSecretariesComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  },
  { 
    path: '',
    component: HomeComponent,
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

export class PeopleRoutingModule { }
