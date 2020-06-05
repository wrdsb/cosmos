import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPanelComponent } from './feedback-panel/feedback-panel.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { NotifictaionsPanelComponent } from './notifictaions-panel/notifictaions-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeedbackPanelComponent, HelpPanelComponent, MenuPanelComponent, NotifictaionsPanelComponent],
  exports: [FeedbackPanelComponent, HelpPanelComponent, MenuPanelComponent, NotifictaionsPanelComponent]
})
export class PanelsModule {}
