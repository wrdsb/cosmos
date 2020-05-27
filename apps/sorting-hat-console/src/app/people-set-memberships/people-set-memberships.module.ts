import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DragDropModule } from "@angular/cdk/drag-drop";

import { SharedModule } from "../shared/shared.module";

import { PeopleSetMembershipsRoutingModule } from './people-set-memberships-routing.module';
import { PeopleSetMembershipsListComponent } from './people-set-memberships-list/people-set-memberships-list.component';
import { PeopleSetMembershipEditComponent } from './people-set-membership-edit/people-set-membership-edit.component';
import { PeopleSetMembershipDetailsComponent } from './people-set-membership-details/people-set-membership-details.component';


@NgModule({
  declarations: [
    PeopleSetMembershipsListComponent,
    PeopleSetMembershipEditComponent,
    PeopleSetMembershipDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    PeopleSetMembershipsRoutingModule
  ]
})
export class PeopleSetMembershipsModule { }
