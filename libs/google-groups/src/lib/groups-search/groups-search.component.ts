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

import { GoogleGroup, SearchFunctionRequestPayload, SearchFunctionResponse } from "@cosmos/types";
import { GoogleGroupsService } from '../google-groups.service';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GroupMetaDialogComponent } from "../group-meta-dialog/group-meta-dialog.component";

@Component({
  selector: 'cosmos-groups-search',
  templateUrl: './groups-search.component.html',
  styleUrls: ['./groups-search.component.scss']
})
export class GroupsSearchComponent implements OnInit {
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
    'name',
    'email',
    //'directMembersCount',
    'adminCreated',
    'membership_automation_active',
    'createdAt',
    'lastActiveAt'
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

  groupNameEmailSearchFormControl = new FormControl();
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

  currentGroupNameEmailSearch = new BehaviorSubject<string>('');
  currentOwnerManagerSearch = new BehaviorSubject<string>('');
  currentAnyFieldSearch = new BehaviorSubject<string>('');

  currentSearch = new BehaviorSubject<string>('*');

  currentPage = new BehaviorSubject<number>(1);
  pageSize = new BehaviorSubject<number>(20);
  maxPage = new BehaviorSubject<number>(1);
  
  //public searchGroupsRequestState$: Observable<ListGroupsRequestState>;
  //public searchGroupsResponse$: Observable<GroupQueryFunctionResponse>;
  
  public searchResponse$: Observable<SearchFunctionResponse>;
  public totalRecords$: Observable<number>;
  public maxPage$: Observable<number>;

  public groupsPage$: Observable<GoogleGroup[]>;

  public groupSelected$: Observable<boolean>;
  public selectedGroup$: Observable<GoogleGroup>;

  groupMetaDialogRef: MatDialogRef<GroupMetaDialogComponent>;

  constructor(
    private groupsService: GoogleGroupsService,
    public dialog: MatDialog
  ) {
    this.searchResponse$ = this.groupsService.searchResponse$;
    this.totalRecords$ = this.searchResponse$.pipe(map(response => response.payload.count));
    this.groupsPage$ = this.groupsService.groupsList$;
    this.maxPage$ = this.totalRecords$.pipe(map(totalRecords => Math.ceil(totalRecords / this.pageSize.value)));
    this.maxPage$.subscribe(this.maxPage);

    this.groupSelected$ = this.groupsService.groupSelected$;
    this.selectedGroup$ = this.groupsService.selectedGroup$;
  }

  ngOnInit() {
    this.searchGroups();
  }

  ngAfterViewInit() {
    this.adminCreatedFilterFormControl.valueChanges
      .subscribe(adminCreated => {
        console.log(`adminCreated Filter: ${adminCreated}`);
        this.currentAdminCreatedFilter.next(adminCreated);
        this.searchGroups();
      }
    );
    this.membershipAutomatedFilterFormControl.valueChanges
      .subscribe(membershipAutomated => {
        console.log(`membershipAutomated Filter: ${membershipAutomated}`);
        this.currentMembershipAutomatedFilter.next(membershipAutomated);
        this.searchGroups();
      }
    );
    this.isOpenFilterFormControl.valueChanges
      .subscribe(isOpen => {
        console.log(`isOpen Filter: ${isOpen}`);
        this.currentIsOpenFilterForm.next(isOpen);
        this.searchGroups();
      }
    );
    this.staffOwnedFilterFormControl.valueChanges
      .subscribe(staffOwned => {
        console.log(`staffOwned Filter: ${staffOwned}`);
        this.currentStaffOwnedFilter.next(staffOwned);
        this.searchGroups();
      }
    );
    this.studentOwnedFilterFormControl.valueChanges
      .subscribe(studentOwned => {
        console.log(`studentOwned Filter: ${studentOwned}`);
        this.currentStudentOwnedFilter.next(studentOwned);
        this.searchGroups();
      }
    );
    this.staffManagedFilterFormControl.valueChanges
      .subscribe(staffManaged => {
        console.log(`staffManaged Filter: ${staffManaged}`);
        this.currentStaffManagedFilter.next(staffManaged);
        this.searchGroups();
      }
    );
    this.studentManagedFilterFormControl.valueChanges
      .subscribe(studentManaged => {
        console.log(`studentManaged Filter: ${studentManaged}`);
        this.currentStudentManagedFilter.next(studentManaged);
        this.searchGroups();
      }
    );
    this.staffMembershipFilterFormControl.valueChanges
      .subscribe(staffMembership => {
        console.log(`staffMembership Filter: ${staffMembership}`);
        this.currentStaffMembershipFilter.next(staffMembership);
        this.searchGroups();
      }
    );
    this.studentMembershipFilterFormControl.valueChanges
      .subscribe(studentMembership => {
        console.log(`studentMembership Filter: ${studentMembership}`);
        this.currentStudentMembershipFilter.next(studentMembership);
        this.searchGroups();
      }
    );
    this.groupNameEmailSearchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(nameEmail => {
        console.log(`nameEmail Search: ${nameEmail}`);
        this.currentGroupNameEmailSearch.next(nameEmail);
        this.currentPage.next(1);
        this.searchGroups();
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
        this.searchGroups();
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
        this.searchGroups();
      }
    );
  }

  pageBeginning(): void {
    this.currentPage.next(1);
    this.searchGroups();
  }

  pageUp(): void {
    const nextPage = this.currentPage.value - 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchGroups();
    }
  }

  pageDown(): void {
    const nextPage = this.currentPage.value + 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchGroups();
    }
  }

  pageEnd(): void {
    this.currentPage.next(this.maxPage.value);
    this.searchGroups();
  }

  nextPageValid(nextPage): boolean {
    return ( nextPage >= 1 && nextPage <= this.maxPage.value ) ? true : false;
  }

  selectGroup(groupID: string): void {
    console.log(`Show details for ${groupID}`);

    this.groupsService.selectGroup(groupID);

    this.groupMetaDialogRef = this.dialog.open(GroupMetaDialogComponent, {
      width: '800px'
    });
  }

  deselectGroup(): void {
    console.log(`Deselect selected group`);
    this.groupsService.deselectGroup();
  }

  searchGroups(): void {
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
  
    if (this.currentGroupNameEmailSearch.value.length > 0) {
      searchString = this.currentGroupNameEmailSearch.value;
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
    
    this.groupsService.searchGroups(searchRequestPayload);
  }
}

interface searchGroupsRequest {
  search?: string;
  page?: number;
}