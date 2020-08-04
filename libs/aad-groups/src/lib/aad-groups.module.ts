import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupsListFullComponent } from './groups-list-full/groups-list-full.component';
import { GroupsListBriefComponent } from './groups-list-brief/groups-list-brief.component';

import { MembersListComponent } from './members-list/members-list.component';

@NgModule({
  declarations: [
    GroupsListComponent,
    GroupsListFullComponent,
    GroupsListBriefComponent,

    MembersListComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: 'all', pathMatch: 'full', component: GroupsListFullComponent},

      {path: '', pathMatch: 'full', component: GroupsListFullComponent}
    ])
  ],
  exports: [
    GroupsListComponent,
    GroupsListFullComponent,
    GroupsListBriefComponent,

    MembersListComponent
  ]
})
export class AADGroupsModule {}
