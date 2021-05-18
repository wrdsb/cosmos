import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatRadioModule } from "@angular/material/radio";

import { ScreensGoogleGoogleCalendarRoutingModule } from './google-calendar-routing.module';

import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { CalendarSearchComponent } from './calendar-search/calendar-search.component';

import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarMetaDialogComponent } from './calendar-meta-dialog/calendar-meta-dialog.component';
import { MembershipsDefinitionsComponent } from './memberships-definitions/memberships-definitions.component';
import { MembershipsOverridesComponent } from './memberships-overrides/memberships-overrides.component';

//import { MembershipsListComponent } from './memberships-list/memberships-list.component';
//import { MembershipDetailComponent } from './membership-detail/membership-detail.component';
//import { MembershipsOverridesComponent } from './memberships-overrides/memberships-overrides.component';
//import { MembershipsDefinitionsComponent } from './memberships-definitions/memberships-definitions.component';


@NgModule({
  declarations: [
    CalendarDetailComponent,
    CalendarMetaDialogComponent,
    CalendarHomeComponent,
    CalendarSearchComponent,
    MembershipsDefinitionsComponent,
    MembershipsOverridesComponent,
    //MembershipsListComponent,
    //MembershipDetailComponent,
    //MembershipsOverridesComponent,
    //MembershipsDefinitionsComponent
  ],
  imports: [
    CommonModule,

    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,

    FontAwesomeModule,
    
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatRadioModule,

    ScreensGoogleGoogleCalendarRoutingModule
  ],
  exports: [
    CalendarDetailComponent,
    CalendarHomeComponent,
    CalendarMetaDialogComponent,
    CalendarSearchComponent
  ],
  entryComponents: [
    CalendarMetaDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ],
})
export class ScreensGoogleGoogleCalendarModule {}
