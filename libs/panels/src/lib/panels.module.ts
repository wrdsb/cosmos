import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPanelComponent } from './feedback-panel/feedback-panel.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeedbackPanelComponent, HelpPanelComponent, MenuPanelComponent],
  exports: [FeedbackPanelComponent, HelpPanelComponent, MenuPanelComponent]
})
export class PanelsModule {}
