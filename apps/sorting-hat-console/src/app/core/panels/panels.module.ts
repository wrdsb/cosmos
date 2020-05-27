import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { NotificationsPanelComponent } from './notifications-panel/notifications-panel.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { FeedbackPanelComponent } from './feedback-panel/feedback-panel.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';


@NgModule({
  declarations: [
    NotificationsPanelComponent,
    ProfilePanelComponent,
    FeedbackPanelComponent,
    HelpPanelComponent,
    SettingsPanelComponent,
    MenuPanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NotificationsPanelComponent,
    ProfilePanelComponent,
    FeedbackPanelComponent,
    HelpPanelComponent,
    SettingsPanelComponent,
    MenuPanelComponent
  ]
})
export class PanelsModule { }
