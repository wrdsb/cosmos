import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { CdkTableModule } from '@angular/cdk/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

import { GoogleGroupsRoutingModule } from './google-groups-routing.module';

import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { GroupsSearchComponent } from './groups-search/groups-search.component';

import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsListComponent } from './groups-list/groups-list.component';

import { MembershipsListComponent } from './memberships-list/memberships-list.component';
import { MembershipDetailComponent } from './membership-detail/membership-detail.component';

@NgModule({
  declarations: [
    GroupDetailComponent,
    GroupsListComponent,
    GroupsHomeComponent,
    GroupsSearchComponent,
    MembershipsListComponent,
    MembershipDetailComponent
  ],
  imports: [
    CommonModule,

    CdkTableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatTableModule,

    GoogleGroupsRoutingModule
  ],
  exports: [
    GroupDetailComponent,
    GroupsListComponent,
    GroupsHomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class GoogleGroupsModule {}
