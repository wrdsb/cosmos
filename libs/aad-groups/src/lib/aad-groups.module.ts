import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from "@angular/material/table";

import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupsListFullComponent } from './groups-list-full/groups-list-full.component';
import { GroupsListBriefComponent } from './groups-list-brief/groups-list-brief.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

import { MembersListComponent } from './members-list/members-list.component';

@NgModule({
  declarations: [
    GroupsHomeComponent,
    GroupsListComponent,
    GroupsListFullComponent,
    GroupsListBriefComponent,
    GroupDetailComponent,

    MembersListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,

    RouterModule.forChild([
      {path: 'all', pathMatch: 'full', component: GroupsListFullComponent},

      {path: '', pathMatch: 'full', component: GroupsHomeComponent}
    ])
  ],
  exports: [
    GroupsHomeComponent,
    GroupsListComponent,
    GroupsListFullComponent,
    GroupsListBriefComponent,
    GroupDetailComponent,

    MembersListComponent
  ]
})
export class AADGroupsModule {}
