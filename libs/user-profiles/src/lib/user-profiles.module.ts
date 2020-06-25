import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
  
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ProfilePageComponent}
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProfilePageComponent
  ]
})
export class UserProfilesModule {}
