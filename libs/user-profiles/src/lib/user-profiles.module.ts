import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { RolesGuard } from "@cosmos/guards";

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileBadgeComponent } from './profile-badge/profile-badge.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfilePageComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard, RolesGuard
    ]
  }
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileBadgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProfilePageComponent,
    ProfileBadgeComponent
  ]
})
export class UserProfilesModule {}
