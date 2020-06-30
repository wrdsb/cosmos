import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleGroupsRoutingModule } from './google-groups-routing.module';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { GroupsSearchComponent } from './groups-search/groups-search.component';
import { GroupMembershipsListComponent } from './group-memberships-list/group-memberships-list.component';
import { GroupMembershipDetailComponent } from './group-membership-detail/group-membership-detail.component';

@NgModule({
  declarations: [
    GroupDetailComponent,
    GroupsListComponent,
    GroupsHomeComponent,
    GroupsSearchComponent,
    GroupMembershipsListComponent,
    GroupMembershipDetailComponent
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
