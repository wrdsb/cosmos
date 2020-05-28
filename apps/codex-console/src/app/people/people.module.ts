import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleHomeComponent } from './home/home.component';
import { PeopleDetailComponent } from './detail/detail.component';
import { PeopleListComponent } from './list/list.component';
import { PeopleSearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PeopleHomeComponent,
    PeopleDetailComponent,
    PeopleListComponent,
    PeopleSearchComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
