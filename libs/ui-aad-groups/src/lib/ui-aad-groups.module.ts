import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { GroupsListBriefComponent } from './groups-list-brief/groups-list-brief.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GroupsListComponent, MembersListComponent, GroupsListBriefComponent]
})
export class UiAadGroupsModule {}
