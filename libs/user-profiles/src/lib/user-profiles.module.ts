import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
//import { RolesGuard } from "@cosmos/guards";

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileBadgeComponent } from './profile-badge/profile-badge.component';
import { ProfileComponent } from "./profile/profile.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard
      //, RolesGuard
    ]
  },
  {
    path: '**',
    //pathMatch: 'full',
    component: ProfilePageComponent,
    data: {
      roles: ['cosmos-superuser', 'cosmos-user-its']
    },
    canActivate: [
      MsalGuard
      //, RolesGuard
    ]
  }
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileBadgeComponent,
    ProfileComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProfilePageComponent,
    ProfileBadgeComponent,
    ProfileComponent,
    DetailComponent
  ]
})
export class UserProfilesModule {}
