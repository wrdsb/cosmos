import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { ProfilePanelComponent } from "./profile-panel/profile-panel.component";


@NgModule({
  declarations: [
    ProfilePanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProfilePanelComponent
  ]
})
export class PanelsModule { }
