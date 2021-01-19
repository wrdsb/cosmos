import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuartermasterRoutingModule } from "./quartermaster-routing.module";

import { QuartermasterHomeComponent } from './home/home.component';
import { AssetsSearchComponent } from "./assets-search/assets-search.component";

@NgModule({
  declarations: [
    QuartermasterHomeComponent,
    AssetsSearchComponent
  ],
  imports: [
    CommonModule,
    QuartermasterRoutingModule
  ],
  exports: [
    QuartermasterHomeComponent,
    AssetsSearchComponent
  ]
})
export class QuartermasterModule {}
