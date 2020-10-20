import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { GoogleCalendar } from "@cosmos/types";
import { GoogleCalendarService } from '../google-calendar.service';

@Component({
  selector: 'cosmos-calendar-meta-dialog',
  templateUrl: './calendar-meta-dialog.component.html',
  styleUrls: ['./calendar-meta-dialog.component.scss']
})
export class CalendarMetaDialogComponent {
  public selectedCalendar$: Observable<GoogleCalendar>;

  constructor(
    private calendarService: GoogleCalendarService
  ) {
    this.selectedCalendar$ = this.calendarService.selectedCalendar$;
  }
}
