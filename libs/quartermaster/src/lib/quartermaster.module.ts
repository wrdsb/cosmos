import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from '@angular/material/select';

import { QuartermasterRoutingModule } from "./quartermaster-routing.module";

import { QuartermasterHomeComponent } from './home/home.component';
import { AssetsSearchComponent } from "./assets-search/assets-search.component";

import { AssetDetailDialogComponent } from './asset-detail-dialog/asset-detail-dialog.component';
import { AssetDetailPageComponent } from './asset-detail-page/asset-detail-page.component';

@NgModule({
  declarations: [
    QuartermasterHomeComponent,
    AssetsSearchComponent,
    AssetDetailDialogComponent,
    AssetDetailPageComponent
  ],
  imports: [
    CommonModule,

    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,

    FontAwesomeModule,
    
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,

    QuartermasterRoutingModule
  ],
  exports: [
    QuartermasterHomeComponent,
    AssetsSearchComponent,
    AssetDetailDialogComponent
  ],
  entryComponents: [
    AssetDetailDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class QuartermasterModule {}
