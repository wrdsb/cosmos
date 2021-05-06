import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { IppsRoutingModule } from "./ipps-routing.module";
import { HomeComponent } from './home/home.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { JobsSearchComponent } from './jobs-search/jobs-search.component';
import { LocationsSearchComponent } from './locations-search/locations-search.component';
import { EmployeeGroupsSearchComponent } from './employee-groups-search/employee-groups-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    PeopleSearchComponent,
    JobsSearchComponent,
    LocationsSearchComponent,
    EmployeeGroupsSearchComponent
  ],
  imports: [
    CommonModule,
    IppsRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class IppsModule {}
