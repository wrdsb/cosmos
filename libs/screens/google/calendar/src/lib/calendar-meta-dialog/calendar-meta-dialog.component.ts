import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { GoogleCalendar } from "@cosmos/types";
import { GoogleCalendarsService } from '@cosmos/search-services';

@Component({
  selector: 'cosmos-calendar-meta-dialog',
  templateUrl: './calendar-meta-dialog.component.html',
  styleUrls: ['./calendar-meta-dialog.component.scss']
})
export class CalendarMetaDialogComponent {
  public selectedCalendar$: Observable<GoogleCalendar>;

  constructor(
    private calendarService: GoogleCalendarsService
  ) {
    this.selectedCalendar$ = this.calendarService.selectedItem$;
  }
}
