import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { ScreensGoogleGoogleCalendar } from "@cosmos/types";
import { ScreensGoogleGoogleCalendarsService } from '@cosmos/search-services';

@Component({
  selector: 'cosmos-calendar-meta-dialog',
  templateUrl: './calendar-meta-dialog.component.html',
  styleUrls: ['./calendar-meta-dialog.component.scss']
})
export class CalendarMetaDialogComponent {
  public selectedCalendar$: Observable<ScreensGoogleGoogleCalendar>;

  constructor(
    private calendarService: ScreensGoogleGoogleCalendarsService
  ) {
    this.selectedCalendar$ = this.calendarService.selectedItem$;
  }
}
