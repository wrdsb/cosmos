import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPingsComponent } from "./all-pings/all-pings.component";

import { CodexPingComponent } from './codex-ping/codex-ping.component';
import { HagarPingComponent } from './hagar-ping/hagar-ping.component';
import { IgorPingComponent } from './igor-ping/igor-ping.component';

const routes: Routes = [
  { path: 'codex', component: CodexPingComponent },
  { path: 'hagar', component: HagarPingComponent },
  { path: 'igor', component: IgorPingComponent },
  { path: '', component: AllPingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PingsRoutingModule { }
