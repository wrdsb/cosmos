import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { GroupsDashboardComponent } from './groups-dashboard/groups-dashboard.component';
import { GroupsSearchComponent } from './groups-search/groups-search.component';

import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { CalendarDashboardComponent } from './calendar-dashboard/calendar-dashboard.component';
import { CalendarSearchComponent } from './calendar-search/calendar-search.component';
import { CalendarDetailsComponent } from './calendar-details/calendar-details.component';
import { GroupDetailsComponent } from './group-details/group-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GroupsHomeComponent,
    GroupsDashboardComponent, 
    GroupsSearchComponent,
    
    CalendarHomeComponent,
    CalendarDashboardComponent,
    CalendarSearchComponent,
    CalendarDetailsComponent,
    GroupDetailsComponent
  ],
})
export class ScreensSharedGoogleModule {}
