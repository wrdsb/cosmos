import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPanelComponent } from './feedback-panel/feedback-panel.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeedbackPanelComponent, HelpPanelComponent],
  exports: [FeedbackPanelComponent, HelpPanelComponent]
})
export class UIPanelsModule {}
