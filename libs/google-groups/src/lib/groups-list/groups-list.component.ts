import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Howl, Howler } from 'howler';

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
  maxPage$ = new BehaviorSubject<number>(1);

  groupsList$ = new BehaviorSubject<GoogleGroup[]>([]);
  groupsPage$ = new BehaviorSubject<GoogleGroup[]>([]);

  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');

  groupSelected: boolean = false;
  selectedGroup$ = new BehaviorSubject<GoogleGroup>(null);

  displayedColumns$ = new BehaviorSubject<string[]>([
    'name',
    'email',
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

  nextPageValid(nextPage): boolean {
    return ( nextPage >= 1 && nextPage <= this.maxPage$.value ) ? true : false;
  }

  selectGroup(group: GoogleGroup): void {
    this.selectedGroup$.next(group);
    this.groupSelected = true;
  }

  getGroups(): void {
    this.igorService.listGroups('admin_created');

    let sound = new Howl({
      src: ['assets/loading-google-groups.mp3'],
      onend: function() {
        console.log('Finished!');
      },
      onloaderror: function() {
        console.log('Error!');
      }
    });
    sound.play();
  }
}
