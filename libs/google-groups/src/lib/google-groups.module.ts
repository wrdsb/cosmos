import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleGroupsRoutingModule } from './google-groups-routing.module';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { GroupsSearchComponent } from './groups-search/groups-search.component';

@NgModule({
  declarations: [
    GroupDetailComponent,
    GroupsListComponent,
    GroupsHomeComponent,
    GroupsSearchComponent
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
