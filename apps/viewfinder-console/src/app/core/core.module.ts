import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from "./layout/layout.module";
import { PanelsModule } from "./panels/panels.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    PanelsModule
  ]
})
export class CoreModule { }
