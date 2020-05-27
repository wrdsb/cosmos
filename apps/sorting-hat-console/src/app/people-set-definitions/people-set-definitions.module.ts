import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DragDropModule } from "@angular/cdk/drag-drop";

import { SharedModule } from "../shared/shared.module";

import { PeopleSetDefinitionsRoutingModule } from './people-set-definitions-routing.module';
import { PeopleSetDefinitionsListComponent } from './people-set-definitions-list/people-set-definitions-list.component';
import { PeopleSetDefinitionEditComponent } from './people-set-definition-edit/people-set-definition-edit.component';
import { PeopleSetDefinitionDetailsComponent } from './people-set-definitions-details/people-set-definition-details.component';
import { PeopleSetDefinitionsSearchComponent } from './people-set-definitions-search/people-set-definitions-search.component';
import { PeopleSetDefinitionsLayoutComponent } from './people-set-definitions-layout/people-set-definitions-layout.component';


@NgModule({
  declarations: [
    PeopleSetDefinitionsListComponent,
    PeopleSetDefinitionEditComponent,
    PeopleSetDefinitionDetailsComponent,
    PeopleSetDefinitionsSearchComponent,
    PeopleSetDefinitionsLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    PeopleSetDefinitionsRoutingModule
  ]
})
export class PeopleSetDefinitionsModule { }
