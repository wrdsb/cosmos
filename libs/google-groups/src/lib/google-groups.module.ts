import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    GoogleGroupsRoutingModule
  ],
  exports: [
    GroupDetailComponent,
    GroupsListComponent,
    GroupsHomeComponent
  ]
})
export class GoogleGroupsModule {}
