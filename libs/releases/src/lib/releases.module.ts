import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleasesRoutingModule } from "./releases-routing.module";

import { ReleaseInfoComponent } from './release-info/release-info.component';
import { ReleasesHomeComponent } from './releases-home/releases-home.component';

@NgModule({
  declarations: [
    ReleaseInfoComponent,
    ReleasesHomeComponent
  ],
  imports: [
    CommonModule,

    ReleasesRoutingModule
  ],
  exports: [
    ReleasesHomeComponent,
    ReleaseInfoComponent
  ]
})
export class ReleasesModule {}
