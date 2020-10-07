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

import { GoogleCalendarRoutingModule } from './google-calendar-routing.module';

import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { CalendarSearchComponent } from './calendar-search/calendar-search.component';

import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarMetaDialogComponent } from './calendar-meta-dialog/calendar-meta-dialog.component';

@NgModule({
  declarations: [
    CalendarDetailComponent,
    CalendarHomeComponent,
    CalendarMetaDialogComponent,
    CalendarSearchComponent
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

    GoogleCalendarRoutingModule
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
export class GoogleCalendarModule {}
