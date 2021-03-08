import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Howl, Howler } from 'howler';
import { faCircle as FalseIcon } from "@fortawesome/free-regular-svg-icons";
import { faAdjust as MaybeIcon } from "@fortawesome/free-solid-svg-icons";
import { faCircle as TrueIcon } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFastBackward, faBackward, faForward, faFastForward } from "@fortawesome/free-solid-svg-icons";

import { GoogleGroup, Status, GroupQueryFunctionResponse, ListGroupsRequestState } from '@cosmos/types';

import { GoogleGroupsService } from '../google-groups.service';
import { IGORService } from '@cosmos/igor-service';
import { FormControl } from '@angular/forms';
import { GroupMetaDialogComponent } from "../group-meta-dialog/group-meta-dialog.component";

@Component({
  selector: 'cosmos-google-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  FalseIcon = FalseIcon;
  MaybeIcon = MaybeIcon;
  TrueIcon = TrueIcon;

  angleUpIcon = faAngleUp;
  angleDownIcon = faAngleDown;

  beginningIcon = faFastBackward;
  backwardIcon = faBackward;
  forwardIcon = faForward;
  endIcon = faFastForward;

  listGroupsRequestState$: Observable<ListGroupsRequestState>;
  listGroupsResponse$: Observable<GroupQueryFunctionResponse>;

  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(20);
  maxPage$ = new BehaviorSubject<number>(1);

  groupsList$ = new BehaviorSubject<GoogleGroup[]>([
    {
      name: "Loading...",
      email: "Loading..."      
    }
  ]);
  groupsPage$ = new BehaviorSubject<GoogleGroup[]>([
    {
      name: "Loading...",
      email: "Loading..."      
    }
  ]);

  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');

  displayedColumns$ = new BehaviorSubject<string[]>([
    'name',
    'email',
    'adminCreated',
    'membership_automation_active'
  ]);

  searchFormControl = new FormControl();

  public groupSelected$: Observable<boolean>;
  public selectedGroup$: Observable<GoogleGroup>;

  groupMetaDialogRef: MatDialogRef<GroupMetaDialogComponent>;

  constructor(
    private groupsService: GoogleGroupsService,
    private igorService: IGORService,
    public dialog: MatDialog
  ) {
    this.listGroupsRequestState$ = this.igorService.listGroupsRequestState$;
    this.listGroupsResponse$ = this.igorService.listGroupsResponse$;

    this.groupSelected$ = this.groupsService.groupSelected$;
    this.selectedGroup$ = this.groupsService.selectedGroup$;
  }

  ngOnInit() {
    this.getGroups();

    combineLatest(this.listGroupsResponse$, this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$)
      .subscribe(([changedGroupsList, searchTerm, sortKey, sortDirection]) => {
        const groupsArray = Object.values(changedGroupsList);
        let filteredGroups: GoogleGroup[];
  
        if (!searchTerm) {
          filteredGroups = groupsArray;
        } else {
          const filteredResults = groupsArray.filter(group => {
            return Object.values(group).reduce((prev, curr) => {
              return prev || curr.toString().toLowerCase().includes(searchTerm.toLowerCase());
            }, false);
          });

          filteredGroups = filteredResults;
        }

        const sortedGroups = filteredGroups.sort((a, b) => {
          if(a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
          if(a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
          return 0;
        });
          
        this.groupsList$.next(sortedGroups);
        this.maxPage$.next(Math.ceil(this.groupsList$.value.length / this.pageSize$.value));
        this.currentPage$.next(1);
    });

    this.searchFormControl.setValue('');

    combineLatest(this.groupsList$, this.currentPage$, this.pageSize$)
      .subscribe(([allSources, currentPage, pageSize]) => {
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
        this.groupsPage$.next(onPage);
    });
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }
  
    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }

  pageBeginning(): void {
    this.currentPage$.next(1);
  }

  pageUp(): void {
    const nextPage = this.currentPage$.value - 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage$.next(nextPage);
    }
  }

  pageDown(): void {
    const nextPage = this.currentPage$.value + 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage$.next(nextPage);
    }
  }

  pageEnd(): void {
    this.currentPage$.next(this.maxPage$.value);
  }

  nextPageValid(nextPage): boolean {
    return ( nextPage >= 1 && nextPage <= this.maxPage$.value ) ? true : false;
  }

  selectGroup(groupEmail: string): void {
  }

  deselectGroup(): void {
    console.log(`Deselect selected group`);
    this.groupsService.deselectGroup();
  }

  getGroups(): void {
    this.igorService.listGroups('admin_created');
  }
}
