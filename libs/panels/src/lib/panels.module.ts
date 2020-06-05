import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPanelComponent } from './feedback-panel/feedback-panel.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { NotifictaionsPanelComponent } from './notifictaions-panel/notifictaions-panel.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeedbackPanelComponent, HelpPanelComponent, MenuPanelComponent, NotifictaionsPanelComponent, ProfilePanelComponent, SettingsPanelComponent],
  exports: [FeedbackPanelComponent, HelpPanelComponent, MenuPanelComponent, NotifictaionsPanelComponent, ProfilePanelComponent, SettingsPanelComponent]
})
export class PanelsModule {}
