import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleHomeComponent } from './people-home/people-home.component';
import { SchoolsHomeComponent } from './schools-home/schools-home.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { SchoolsDashboardComponent } from './schools-dashboard/schools-dashboard.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { SchoolsSearchComponent } from './schools-search/schools-search.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleHomeComponent, SchoolsHomeComponent, PeopleDashboardComponent, SchoolsDashboardComponent, PeopleSearchComponent, SchoolsSearchComponent, PersonDetailsComponent, SchoolDetailsComponent],
})
export class ScreensSharedCodexModule {}
