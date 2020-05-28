import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsListComponent } from './groups-list/groups-list.component';


const routes: Routes = [
  { path: 'group', component: GroupDetailComponent },
  { path: 'list', component: GroupsListComponent},
  { path: '', component: GroupsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleGroupsRoutingModule { }
