import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { ProfilePanelComponent } from "./profile-panel/profile-panel.component";
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';


@NgModule({
  declarations: [
    ProfilePanelComponent,
    SettingsPanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProfilePanelComponent,
    SettingsPanelComponent
  ]
})
export class PanelsModule { }
