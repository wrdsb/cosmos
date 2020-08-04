import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AppsMenuPanelComponent } from './apps-menu-panel/apps-menu-panel.component';

@NgModule({
  declarations: [
    FeedbackPanelComponent,
    HelpPanelComponent,
    MenuPanelComponent,
    NotifictaionsPanelComponent,
    ProfilePanelComponent,
    SettingsPanelComponent,
    FooterPanelComponent,
    HeaderPanelComponent,
    AppsMenuPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FeedbackPanelComponent,
    HelpPanelComponent,
    MenuPanelComponent,
    NotifictaionsPanelComponent,
    ProfilePanelComponent,
    SettingsPanelComponent,
    FooterPanelComponent,
    HeaderPanelComponent,
    AppsMenuPanelComponent
  ]
})
export class PanelsModule {}
