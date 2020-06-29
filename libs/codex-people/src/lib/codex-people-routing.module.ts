import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodexPeopleHomeComponent } from "./home/home.component";
import { CodexPeopleDetailComponent } from "./detail/detail.component";
import { CodexPeopleListComponent } from "./list/list.component";

const routes: Routes = [
  { path: 'person', component: CodexPeopleDetailComponent },
  { path: 'list', component: CodexPeopleListComponent},
  { path: '', component: CodexPeopleHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodexPeopleRoutingModule { }
