import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeedbackPanelComponent } from './feedback-panel/feedback-panel.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { NotifictaionsPanelComponent } from './notifictaions-panel/notifictaions-panel.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';
import { FooterPanelComponent } from './footer-panel/footer-panel.component';
import { HeaderPanelComponent } from './header-panel/header-panel.component';

@NgModule({
  declarations: [
    FeedbackPanelComponent,
    HelpPanelComponent,
    MenuPanelComponent,
    NotifictaionsPanelComponent,
    ProfilePanelComponent,
    SettingsPanelComponent,
    FooterPanelComponent,
    HeaderPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FeedbackPanelComponent,
    HelpPanelComponent,
    MenuPanelComponent,
    NotifictaionsPanelComponent,
    ProfilePanelComponent,
    SettingsPanelComponent,
    FooterPanelComponent,
    HeaderPanelComponent
  ]
})
export class PanelsModule {}
