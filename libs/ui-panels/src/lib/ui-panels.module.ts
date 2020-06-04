import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPanelComponent } from './feedback-panel/feedback-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeedbackPanelComponent],
  exports: [FeedbackPanelComponent]
})
export class UIPanelsModule {}
