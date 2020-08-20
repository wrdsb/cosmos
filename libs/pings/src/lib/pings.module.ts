import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodexPingComponent } from './codex-ping/codex-ping.component';
import { HagarPingComponent } from './hagar-ping/hagar-ping.component';
import { IgorPingComponent } from './igor-ping/igor-ping.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CodexPingComponent, HagarPingComponent, IgorPingComponent]
})
export class PingsModule {}
