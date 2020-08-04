import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListBriefComponent } from './users-list-brief/users-list-brief.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersListComponent, UsersListBriefComponent]
})
export class UiAadUsersModule {}
