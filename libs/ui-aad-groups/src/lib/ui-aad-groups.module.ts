import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { GroupsListBriefComponent } from './groups-list-brief/groups-list-brief.component';
import { GroupsListFullComponent } from './groups-list-full/groups-list-full.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GroupsListComponent, MembersListComponent, GroupsListBriefComponent, GroupsListFullComponent]
})
export class UiAadGroupsModule {}
