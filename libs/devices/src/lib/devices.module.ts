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

import { DevicesRoutingModule } from './devices-routing.module';

import { DevicesHomeComponent } from './home/devices-home.component';
import { DeviceLoansDashboardComponent } from './device-loans-dashboard/device-loans-dashboard.component';
import { DeviceLoansSearchComponent } from './device-loans-search/device-loans-search.component';

import { DeviceLoanMetaDialogComponent } from "./device-loan-meta-dialog/device-loan-meta-dialog.component";
import { DeviceInventoryComponent } from './device-inventory/device-inventory.component';

@NgModule({
  declarations: [
    DevicesHomeComponent,
    DeviceLoansSearchComponent,
    DeviceLoanMetaDialogComponent,
    DeviceLoansDashboardComponent,
    DeviceInventoryComponent
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

    DevicesRoutingModule
  ],
  exports: [
    DevicesHomeComponent,
    DeviceLoansSearchComponent,
    DeviceLoanMetaDialogComponent,
    DeviceLoansDashboardComponent
  ],
  entryComponents: [
    DeviceLoanMetaDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class DevicesModule {}
