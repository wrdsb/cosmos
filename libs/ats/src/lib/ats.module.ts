import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ATSRoutingModule } from "./ats-routing.module";

import { ATSHomeComponent } from './home/home.component';
import { AssetsSearchComponent } from "./assets-search/assets-search.component";
import { AssetDetailDialogComponent } from './asset-detail-dialog/asset-detail-dialog.component';

@NgModule({
  declarations: [
    ATSHomeComponent,
    AssetsSearchComponent,
    AssetDetailDialogComponent
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
