import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodexPingComponent } from './codex-ping/codex-ping.component';
import { HagarPingComponent } from './hagar-ping/hagar-ping.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CodexPingComponent, HagarPingComponent]
})
export class PingsModule {}
