import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleSetDefinitionsLayoutComponent } from './people-set-definitions-layout/people-set-definitions-layout.component';


const routes: Routes = [
  { path: ':id', component: PeopleSetDefinitionsLayoutComponent },
  { path: '', component: PeopleSetDefinitionsLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleSetDefinitionsRoutingModule { }
