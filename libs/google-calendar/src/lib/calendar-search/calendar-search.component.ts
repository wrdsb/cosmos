import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

import { faCircle as FalseIcon } from "@fortawesome/free-regular-svg-icons";
import { faAdjust as MaybeIcon } from "@fortawesome/free-solid-svg-icons";
import { faCircle as TrueIcon } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFastBackward, faBackward, faForward, faFastForward } from "@fortawesome/free-solid-svg-icons";

import { GoogleCalendar, SearchFunctionRequestPayload, SearchFunctionResponse } from "@cosmos/types";
import { GoogleCalendarService } from '../google-calendar.service';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CalendarMetaDialogComponent } from "../calendar-meta-dialog/calendar-meta-dialog.component";

@Component({
  selector: 'cosmos-calendar-search',
  templateUrl: './calendar-search.component.html',
  styleUrls: ['./calendar-search.component.scss']
})
export class CalendarSearchComponent implements OnInit {
  FalseIcon = FalseIcon;
  MaybeIcon = MaybeIcon;
  TrueIcon = TrueIcon;

  angleUpIcon = faAngleUp;
  angleDownIcon = faAngleDown;

  beginningIcon = faFastBackward;
  backwardIcon = faBackward;
  forwardIcon = faForward;
  endIcon = faFastForward;

  displayedColumns$ = new BehaviorSubject<string[]>([
    'summary',
    'description',
    'id'
  ]);

  searchFormControl = new FormControl();

  currentPage = new BehaviorSubject<number>(1);
  currentSearch = new BehaviorSubject<string>('*');
  pageSize = new BehaviorSubject<number>(20);
  maxPage = new BehaviorSubject<number>(1);
  
  public searchResponse$: Observable<SearchFunctionResponse>;
  public totalRecords$: Observable<number>;
  public maxPage$: Observable<number>;

  public calendarsPage$: Observable<GoogleCalendar[]>;

  public calendarSelected$: Observable<boolean>;
  public selectedCalendar$: Observable<GoogleCalendar>;

  calendarMetaDialogRef: MatDialogRef<CalendarMetaDialogComponent>;

  constructor(
    private calendarService: GoogleCalendarService,
    public dialog: MatDialog
  ) {
    this.searchResponse$ = this.calendarService.searchResponse$;
    this.totalRecords$ = this.searchResponse$.pipe(map(response => response.payload.count));
    this.calendarsPage$ = this.calendarService.calendarsList$;
    this.maxPage$ = this.totalRecords$.pipe(map(totalRecords => Math.ceil(totalRecords / this.pageSize.value)));
    this.maxPage$.subscribe(this.maxPage);

    this.calendarSelected$ = this.calendarService.calendarSelected$;
    this.selectedCalendar$ = this.calendarService.selectedCalendar$;
  }

  ngOnInit() {
    this.searchCalendars();
  }

  ngAfterViewInit() {
    this.searchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        console.log(searchTerm);
        this.currentSearch.next(searchTerm);
        this.currentPage.next(1);
        this.searchCalendars();
      });
  }

  pageBeginning(): void {
    this.currentPage.next(1);
    this.searchCalendars();
  }

  pageUp(): void {
    const nextPage = this.currentPage.value - 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchCalendars();
    }
  }

  pageDown(): void {
    const nextPage = this.currentPage.value + 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchCalendars();
    }
  }

  pageEnd(): void {
    this.currentPage.next(this.maxPage.value);
    this.searchCalendars();
  }

  nextPageValid(nextPage): boolean {
    return ( nextPage >= 1 && nextPage <= this.maxPage.value ) ? true : false;
  }

  selectCalendar(calendarID: string): void {
    console.log(`Show details for ${calendarID}`);

    this.calendarService.selectCalendar(calendarID);

    this.calendarMetaDialogRef = this.dialog.open(CalendarMetaDialogComponent, {
      width: '800px'
    });
  }

  deselectCalendar(): void {
    console.log(`Deselect selected calendar`);
    this.calendarService.deselectCalendar();
  }

  searchCalendars(): void {
    let searchRequestPayload = {
      search: this.currentSearch.value,
      skip: (this.currentPage.value - 1) * this.pageSize.value
    } as SearchFunctionRequestPayload;
    
    this.calendarService.searchCalendars(searchRequestPayload);
  }
}

interface searchCalendarsRequest {
  search?: string;
  page?: number;
}