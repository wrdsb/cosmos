import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleSetMembershipsListComponent } from './people-set-memberships-list/people-set-memberships-list.component';


const routes: Routes = [
  { path: '', component: PeopleSetMembershipsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleSetMembershipsRoutingModule { }
