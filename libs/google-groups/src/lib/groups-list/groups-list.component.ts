import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';

import { GoogleGroup, Status, GroupQueryFunctionResponse, ListGroupsRequestState } from '@cosmos/types';

import { GoogleGroupsService } from '../google-groups.service';
import { IGORService } from '@cosmos/igor-service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cosmos-google-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  listGroupsRequestState$: Observable<ListGroupsRequestState>;
  listGroupsResponse$: Observable<GroupQueryFunctionResponse>;

  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(20);

  groupsList$ = new BehaviorSubject<GoogleGroup[]>([]);
  groupsPage$ = new BehaviorSubject<GoogleGroup[]>([]);

  groupSelected: boolean = false;
  selectedGroup$ = new BehaviorSubject<GoogleGroup>(null);

  displayedColumns$ = new BehaviorSubject<string[]>([
    'name',
    'email',
    'description',
    'adminCreated',
    'membership_automation_active'
  ]);

  searchFormControl = new FormControl();

  constructor(
    private groupsService: GoogleGroupsService,
    private igorService: IGORService
  ) {
    this.listGroupsRequestState$ = this.igorService.listGroupsRequestState$;
    this.listGroupsResponse$ = this.igorService.listGroupsResponse$;
  }

  ngOnInit() {
    this.getGroups();

    combineLatest(this.listGroupsResponse$, this.searchFormControl.valueChanges)
      .subscribe(([changedGroupsList, searchTerm]) => {
        const groupsArray = Object.values(changedGroupsList);
  
        if (!searchTerm) {
          this.groupsList$.next(groupsArray);
          return;
        }

        const filteredResults = groupsArray.filter(group => {
          return Object.values(group).reduce((prev, curr) => {
            return prev || curr.toString().toLowerCase().includes(searchTerm.toLowerCase());
          }, false);
        });

        this.groupsList$.next(filteredResults);
    });

    this.searchFormControl.setValue('');

    combineLatest(this.groupsList$, this.currentPage$, this.pageSize$)
      .subscribe(([allSources, currentPage, pageSize]) => {
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
        this.groupsPage$.next(onPage);
    });
  }

  selectGroup(group: GoogleGroup): void {
    this.selectedGroup$.next(group);
    this.groupSelected = true;
  }

  getGroups(): void {
    this.igorService.listGroups('admin_created');
  }
}
