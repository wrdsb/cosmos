import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersListBriefComponent } from './users-list-brief/users-list-brief.component';
import { UsersListFullComponent } from './users-list-full/users-list-full.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersListFullComponent,
    UsersListBriefComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersListComponent,
    UsersListFullComponent,
    UsersListBriefComponent
  ]
})
export class AadUsersModule {}
