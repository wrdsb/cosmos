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

import { ScreensIppsRoutingModule } from "./ipps-routing.module";

import { IPPSHomeComponent } from './ipps-home/ipps-home.component';

import { EmployeeGroupsSearchComponent } from './employee-groups-search/employee-groups-search.component';
import { JobsSearchComponent } from './jobs-search/jobs-search.component';
import { LocationsSearchComponent } from './locations-search/locations-search.component';
import { PeopleSearchComponent } from './people-search/people-search.component';

import { AdminTransfersComponent } from './admin-transfers/admin-transfers.component';

import { EmployeeGroupMetaDialogComponent } from './employee-group-meta-dialog/employee-group-meta-dialog.component';
import { JobMetaDialogComponent } from './job-meta-dialog/job-meta-dialog.component';
import { LocationMetaDialogComponent } from './location-meta-dialog/location-meta-dialog.component';
import { PersonMetaDialogComponent } from './person-meta-dialog/person-meta-dialog.component';

@NgModule({
  declarations: [
    IPPSHomeComponent,

    EmployeeGroupsSearchComponent,
    JobsSearchComponent,
    LocationsSearchComponent,
    PeopleSearchComponent,

    AdminTransfersComponent,

    EmployeeGroupMetaDialogComponent,
    JobMetaDialogComponent,
    LocationMetaDialogComponent,
    PersonMetaDialogComponent
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

    ScreensIppsRoutingModule
  ],
  exports: [
    IPPSHomeComponent,

    EmployeeGroupsSearchComponent,
    JobsSearchComponent,
    LocationsSearchComponent,
    PeopleSearchComponent,

    AdminTransfersComponent,
  
    EmployeeGroupMetaDialogComponent,
    JobMetaDialogComponent,
    LocationMetaDialogComponent,
    PersonMetaDialogComponent
  ],
  entryComponents: [
    PersonMetaDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class ScreensIppsModule {}
