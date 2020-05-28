import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleHomeComponent } from "./home/home.component";
import { PeopleDetailComponent } from "./detail/detail.component";
import { PeopleListComponent } from "./list/list.component";

const routes: Routes = [
  { path: 'person', component: PeopleDetailComponent },
  { path: 'list', component: PeopleListComponent},
  { path: '', component: PeopleHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
