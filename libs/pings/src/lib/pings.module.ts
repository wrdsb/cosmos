import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PingsRoutingModule } from "./pings-routing.module";

import { AllPingsComponent } from './all-pings/all-pings.component';

import { CodexPingComponent } from './codex-ping/codex-ping.component';
import { HagarPingComponent } from './hagar-ping/hagar-ping.component';
import { IgorPingComponent } from './igor-ping/igor-ping.component';
import { QuartermasterPingComponent } from "./quartermaster-ping/quartermaster-ping.component";
import { ViewfinderPingComponent } from './viewfinder-ping/viewfinder-ping.component';

@NgModule({
  declarations: [
    AllPingsComponent,
    CodexPingComponent,
    HagarPingComponent,
    IgorPingComponent,
    QuartermasterPingComponent,
    ViewfinderPingComponent
  ],
  imports: [
    CommonModule,
    PingsRoutingModule
  ],
  exports: [
    AllPingsComponent,
    CodexPingComponent,
    HagarPingComponent,
    IgorPingComponent,
    QuartermasterPingComponent,
    ViewfinderPingComponent
  ]
})
export class PingsModule {}
