import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ATSRoutingModule } from "./ats-routing.module";

import { ATSHomeComponent } from './home/home.component';
import { AssetsSearchComponent } from "./assets-search/assets-search.component";

@NgModule({
  declarations: [
    ATSHomeComponent,
    AssetsSearchComponent
  ],
  imports: [
    CommonModule,
    ATSRoutingModule
  ],
  exports: [
    ATSHomeComponent,
    AssetsSearchComponent
  ]
})
export class AtsModule {}
