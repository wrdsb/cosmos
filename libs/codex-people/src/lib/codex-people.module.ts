import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodexPeopleRoutingModule } from "./codex-people-routing.module";
import { CodexPeopleHomeComponent } from './home/home.component';
import { CodexPeopleDetailComponent } from './detail/detail.component';
import { CodexPeopleListComponent } from './list/list.component';
import { CodexPeopleSearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    CodexPeopleHomeComponent,
    CodexPeopleDetailComponent,
    CodexPeopleListComponent,
    CodexPeopleSearchComponent
  ],
  imports: [
    CommonModule,
    CodexPeopleRoutingModule
  ],
  exports: [
    CodexPeopleHomeComponent,
    CodexPeopleDetailComponent,
    CodexPeopleListComponent,
    CodexPeopleSearchComponent
  ]
})
export class CodexPeopleModule {}
