import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PingsUiRoutingModule } from "./pings-ui-routing.module";

import { AllPingsComponent } from './all-pings/all-pings.component';

import { CodexPingComponent } from './codex-ping/codex-ping.component';
import { HagarPingComponent } from './hagar-ping/hagar-ping.component';
import { IgorPingComponent } from './igor-ping/igor-ping.component';
import { QuartermasterPingComponent } from "./quartermaster-ping/quartermaster-ping.component";
import { ViewfinderPingComponent } from './viewfinder-ping/viewfinder-ping.component';
import { SortingHatPingComponent } from './sorting-hat-ping/sorting-hat-ping.component';
import { SkinnerPingComponent } from './skinner-ping/skinner-ping.component';
import { PanamaPingComponent } from './panama-ping/panama-ping.component';
import { HoustonPingComponent } from './houston-ping/houston-ping.component';
import { FlendersonPingComponent } from './flenderson-ping/flenderson-ping.component';

@NgModule({
  declarations: [
    AllPingsComponent,
    CodexPingComponent,
    HagarPingComponent,
    IgorPingComponent,
    QuartermasterPingComponent,
    ViewfinderPingComponent,
    SortingHatPingComponent,
    SkinnerPingComponent,
    PanamaPingComponent,
    HoustonPingComponent,
    FlendersonPingComponent
  ],
  imports: [
    CommonModule,
    PingsUiRoutingModule
  ],
  exports: [
    AllPingsComponent,
    CodexPingComponent,
    HagarPingComponent,
    IgorPingComponent,
    QuartermasterPingComponent,
    ViewfinderPingComponent,
    SortingHatPingComponent,
    SkinnerPingComponent,
    PanamaPingComponent,
    HoustonPingComponent,
    FlendersonPingComponent
  ]
})
export class PingsUiModule {}
