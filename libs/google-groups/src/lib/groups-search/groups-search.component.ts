import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

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
    'adminCreated',
    'membership_automation_active'
  ]);

  searchFormControl = new FormControl();

  currentPage = new BehaviorSubject<number>(1);
  currentSearch = new BehaviorSubject<string>('*');
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
    this.searchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        console.log(searchTerm);
        this.currentSearch.next(searchTerm);
        this.currentPage.next(1);
        this.searchGroups();
      });
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
    let searchRequestPayload = {
      search: this.currentSearch.value,
      skip: (this.currentPage.value - 1) * this.pageSize.value
    } as SearchFunctionRequestPayload;
    
    this.groupsService.searchGroups(searchRequestPayload);
  }
}

interface searchGroupsRequest {
  search?: string;
  page?: number;
}