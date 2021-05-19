import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

import { faWindowClose as CloseIcon } from "@fortawesome/free-solid-svg-icons";
import { faCircle as FalseIcon } from "@fortawesome/free-regular-svg-icons";
import { faAdjust as MaybeIcon } from "@fortawesome/free-solid-svg-icons";
import { faCircle as TrueIcon } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFastBackward, faBackward, faForward, faFastForward } from "@fortawesome/free-solid-svg-icons";

import { GoogleCalendar, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";
import { GoogleCalendarsService } from '@cosmos/search-services';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CalendarMetaDialogComponent } from "../calendar-meta-dialog/calendar-meta-dialog.component";

@Component({
  selector: 'cosmos-calendar-search',
  templateUrl: './calendar-search.component.html',
  styleUrls: ['./calendar-search.component.scss']
})
export class CalendarSearchComponent implements OnInit {
  CloseIcon = CloseIcon;

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

  adminCreatedFilterFormControl = new FormControl();
  membershipAutomatedFilterFormControl = new FormControl();
  isOpenFilterFormControl = new FormControl();

  staffOwnedFilterFormControl = new FormControl();
  studentOwnedFilterFormControl = new FormControl();
  staffManagedFilterFormControl = new FormControl();
  studentManagedFilterFormControl = new FormControl();
  staffMembershipFilterFormControl = new FormControl();
  studentMembershipFilterFormControl = new FormControl();

  calendarNameEmailSearchFormControl = new FormControl();
  ownerManagerSearchFormControl = new FormControl();
  anyFieldSearchFormControl = new FormControl();

  currentAdminCreatedFilter = new BehaviorSubject<string>('');
  currentMembershipAutomatedFilter = new BehaviorSubject<string>('');
  currentIsOpenFilterForm = new BehaviorSubject<string>('');

  currentStaffOwnedFilter = new BehaviorSubject<string>('');
  currentStudentOwnedFilter = new BehaviorSubject<string>('');
  currentStaffManagedFilter = new BehaviorSubject<string>('');
  currentStudentManagedFilter = new BehaviorSubject<string>('');
  currentStaffMembershipFilter = new BehaviorSubject<string>('');
  currentStudentMembershipFilter = new BehaviorSubject<string>('');

  currentCalendarNameEmailSearch = new BehaviorSubject<string>('');
  currentOwnerManagerSearch = new BehaviorSubject<string>('');
  currentAnyFieldSearch = new BehaviorSubject<string>('');

  currentSearch = new BehaviorSubject<string>('*');

  currentPage = new BehaviorSubject<number>(1);
  pageSize = new BehaviorSubject<number>(20);
  maxPage = new BehaviorSubject<number>(1);
  
  public searchRequestState$: Observable<SearchRequestState>;
  public searchResponse$: Observable<SearchFunctionResponse>;
  
  public totalRecords$: Observable<number>;
  public maxPage$: Observable<number>;

  private calendarsPage: BehaviorSubject<GoogleCalendar[]> = new BehaviorSubject([
    {
      summary: "Loading..."
    }
  ]);
  public readonly calendarsPage$: Observable<GoogleCalendar[]> = this.calendarsPage.asObservable();

  public calendarSelected$: Observable<boolean>;
  public selectedCalendar$: Observable<GoogleCalendar>;

  calendarMetaDialogRef: MatDialogRef<CalendarMetaDialogComponent>;

  constructor(
    private calendarService: GoogleCalendarsService,
    public dialog: MatDialog
  ) {
    this.searchRequestState$ = this.calendarService.searchRequestState$;
    this.searchResponse$ = this.calendarService.searchResponse$;

    this.totalRecords$ = this.searchResponse$.pipe(map(response => response.payload.count));
    this.maxPage$ = this.totalRecords$.pipe(map(totalRecords => Math.ceil(totalRecords / this.pageSize.value)));
    this.maxPage$.subscribe(this.maxPage);

    this.calendarsPage$ = this.calendarService.itemsList$;

    this.calendarSelected$ = this.calendarService.itemSelected$;
    this.selectedCalendar$ = this.calendarService.selectedItem$;
  }

  ngOnInit() {
    this.searchCalendars();
  }

  ngAfterViewInit() {
    this.adminCreatedFilterFormControl.valueChanges
      .subscribe(adminCreated => {
        console.log(`adminCreated Filter: ${adminCreated}`);
        this.currentAdminCreatedFilter.next(adminCreated);
        this.searchCalendars();
      }
    );
    this.membershipAutomatedFilterFormControl.valueChanges
      .subscribe(membershipAutomated => {
        console.log(`membershipAutomated Filter: ${membershipAutomated}`);
        this.currentMembershipAutomatedFilter.next(membershipAutomated);
        this.searchCalendars();
      }
    );
    this.isOpenFilterFormControl.valueChanges
      .subscribe(isOpen => {
        console.log(`isOpen Filter: ${isOpen}`);
        this.currentIsOpenFilterForm.next(isOpen);
        this.searchCalendars();
      }
    );
    this.staffOwnedFilterFormControl.valueChanges
      .subscribe(staffOwned => {
        console.log(`staffOwned Filter: ${staffOwned}`);
        this.currentStaffOwnedFilter.next(staffOwned);
        this.searchCalendars();
      }
    );
    this.studentOwnedFilterFormControl.valueChanges
      .subscribe(studentOwned => {
        console.log(`studentOwned Filter: ${studentOwned}`);
        this.currentStudentOwnedFilter.next(studentOwned);
        this.searchCalendars();
      }
    );
    this.staffManagedFilterFormControl.valueChanges
      .subscribe(staffManaged => {
        console.log(`staffManaged Filter: ${staffManaged}`);
        this.currentStaffManagedFilter.next(staffManaged);
        this.searchCalendars();
      }
    );
    this.studentManagedFilterFormControl.valueChanges
      .subscribe(studentManaged => {
        console.log(`studentManaged Filter: ${studentManaged}`);
        this.currentStudentManagedFilter.next(studentManaged);
        this.searchCalendars();
      }
    );
    this.staffMembershipFilterFormControl.valueChanges
      .subscribe(staffMembership => {
        console.log(`staffMembership Filter: ${staffMembership}`);
        this.currentStaffMembershipFilter.next(staffMembership);
        this.searchCalendars();
      }
    );
    this.studentMembershipFilterFormControl.valueChanges
      .subscribe(studentMembership => {
        console.log(`studentMembership Filter: ${studentMembership}`);
        this.currentStudentMembershipFilter.next(studentMembership);
        this.searchCalendars();
      }
    );
    this.calendarNameEmailSearchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(nameEmail => {
        console.log(`nameEmail Search: ${nameEmail}`);
        this.currentCalendarNameEmailSearch.next(nameEmail);
        this.currentPage.next(1);
        this.searchCalendars();
      }
    );
    this.ownerManagerSearchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(ownerManager => {
        console.log(`ownerManager Search: ${ownerManager}`);
        this.currentOwnerManagerSearch.next(ownerManager);
        this.currentPage.next(1);
        this.searchCalendars();
      }
    );
    this.anyFieldSearchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        console.log(`searchTerm search: ${searchTerm}`);
        this.currentAnyFieldSearch.next(searchTerm);
        this.currentPage.next(1);
        this.searchCalendars();
      }
    );
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

    this.calendarService.selectItem(calendarID);

    this.calendarMetaDialogRef = this.dialog.open(CalendarMetaDialogComponent, {
      width: '800px'
    });
  }

  deselectCalendar(): void {
    console.log(`Deselect selected calendar`);
    this.calendarService.deselectItem();
  }

  searchCalendars(): void {
    let filterString = '';
    let searchString = '*';

    if (this.currentAdminCreatedFilter.value.length > 0 && this.currentAdminCreatedFilter.value !== 'all') {
      filterString += `adminCreated eq ${this.currentAdminCreatedFilter.value}`;
    }

    if (this.currentMembershipAutomatedFilter.value.length > 0 && this.currentMembershipAutomatedFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `membership_automation_active eq ${this.currentMembershipAutomatedFilter.value}`;
    }

    if (this.currentIsOpenFilterForm.value.length > 0 && this.currentIsOpenFilterForm.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `isOpen eq ${this.currentIsOpenFilterForm.value}`;
    }

    if (this.currentStaffOwnedFilter.value.length > 0 && this.currentStaffOwnedFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `staffOwned eq ${this.currentStaffOwnedFilter.value}`;
    }

    if (this.currentStudentOwnedFilter.value.length > 0 && this.currentStudentOwnedFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `studentOwned eq ${this.currentStudentOwnedFilter.value}`;
    }

    if (this.currentStaffManagedFilter.value.length > 0 && this.currentStaffManagedFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `staffManaged eq ${this.currentStaffManagedFilter.value}`;
    }

    if (this.currentStudentManagedFilter.value.length > 0 && this.currentStudentManagedFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `studentManaged eq ${this.currentStudentManagedFilter.value}`;
    }

    if (this.currentStaffMembershipFilter.value.length > 0 && this.currentStaffMembershipFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `staffMembership eq ${this.currentStaffMembershipFilter.value}`;
    }

    if (this.currentStudentMembershipFilter.value.length > 0 && this.currentStudentMembershipFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `studentMembership eq ${this.currentStudentMembershipFilter.value}`;
    }
  
    if (this.currentCalendarNameEmailSearch.value.length > 0) {
      searchString = this.currentCalendarNameEmailSearch.value;
    }

    if (this.currentOwnerManagerSearch.value.length > 0) {
      searchString = this.currentOwnerManagerSearch.value;
    }

    if (this.currentAnyFieldSearch.value.length > 0) {
      searchString = this.currentAnyFieldSearch.value;
    }
  
    let searchRequestPayload = {
      search: searchString,
      skip: (this.currentPage.value - 1) * this.pageSize.value
    } as SearchFunctionRequestPayload;

    if (filterString.length > 0) {
      searchRequestPayload.filter = filterString;
    }

    console.log(searchRequestPayload);
    
    this.calendarService.searchCalendars(searchRequestPayload);
  }
}

interface searchCalendarsRequest {
  search?: string;
  page?: number;
}