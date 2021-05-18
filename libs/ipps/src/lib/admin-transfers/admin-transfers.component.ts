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

import { IPPSPerson, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";
import { IPPSPeopleService } from '@cosmos/search-services';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PersonMetaDialogComponent } from "../person-meta-dialog/person-meta-dialog.component";

@Component({
  selector: 'cosmos-admin-transfers',
  templateUrl: './admin-transfers.component.html',
  styleUrls: ['./admin-transfers.component.scss']
})
export class AdminTransfersComponent implements OnInit {
  columns = [
    //"id",
    //"createdAt",
    //"updatedAt",
    //"deletedAt",
    //"deleted",
    "email",
    //"username",
    //"employeeID",
    //"firstName",
    //"lastName",
    //"fullName",
    "sortableName",
    //"ein",
    //"locationCodes",
    //"schoolCodes",
    //"jobCodes",
    //"employeeGroupCodes",
    //"homeLocation",
    //"directory",
    //"phone",
    //"extension",
    //"mbxnumber",
    //"numberOfAssignments",
    //"numberOfActiveAssignments",
  ];

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

  displayedColumns$ = new BehaviorSubject<string[]>(this.columns);

  anyFieldSearchFormControl = new FormControl();

  currentAnyFieldSearch = new BehaviorSubject<string>('');

  currentSearch = new BehaviorSubject<string>('*');

  currentPage = new BehaviorSubject<number>(1);
  pageSize = new BehaviorSubject<number>(20);
  maxPage = new BehaviorSubject<number>(1);

  public searchRequestState$: Observable<SearchRequestState>;
  public searchResponse$: Observable<SearchFunctionResponse>;
  
  public totalRecords$: Observable<number>;
  public maxPage$: Observable<number>;

  private peoplePage: BehaviorSubject<IPPSPerson[]> = new BehaviorSubject([
    {
      email: "Loading..."      
    }
  ]);
  public readonly peoplePage$: Observable<IPPSPerson[]> = this.peoplePage.asObservable();

  public personSelected$: Observable<boolean>;
  public selectedPerson$: Observable<IPPSPerson>;

  personMetaDialogRef: MatDialogRef<PersonMetaDialogComponent>;

  constructor(
    private ippsService: IPPSPeopleService,
    public dialog: MatDialog
  ) {
    this.searchRequestState$ = this.ippsService.searchRequestState$;
    this.searchResponse$ = this.ippsService.searchResponse$;

    this.totalRecords$ = this.searchResponse$.pipe(map(response => response.payload.count));
    this.maxPage$ = this.totalRecords$.pipe(map(totalRecords => Math.ceil(totalRecords / this.pageSize.value)));
    this.maxPage$.subscribe(this.maxPage);

    this.peoplePage$ = this.ippsService.itemsList$;

    this.personSelected$ = this.ippsService.itemSelected$;
    this.selectedPerson$ = this.ippsService.selectedItem$;
  }

  ngOnInit(): void {
    this.searchPeople();
  }

  ngAfterViewInit() {
    this.anyFieldSearchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        console.log(`searchTerm search: ${searchTerm}`);
        this.currentAnyFieldSearch.next(searchTerm);
        this.currentPage.next(1);
        this.searchPeople();
      }
    );
  }

  pageBeginning(): void {
    this.currentPage.next(1);
    this.searchPeople();
  }

  pageUp(): void {
    const nextPage = this.currentPage.value - 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchPeople();
    }
  }

  pageDown(): void {
    const nextPage = this.currentPage.value + 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchPeople();
    }
  }

  pageEnd(): void {
    this.currentPage.next(this.maxPage.value);
    this.searchPeople();
  }

  nextPageValid(nextPage): boolean {
    return ( nextPage >= 1 && nextPage <= this.maxPage.value ) ? true : false;
  }

  selectPerson(groupID: string): void {
    console.log(`Show details for ${groupID}`);

    this.ippsService.selectItem(groupID);

    this.personMetaDialogRef = this.dialog.open(PersonMetaDialogComponent, {
      width: '800px'
    });
  }

  deselectGroup(): void {
    console.log(`Deselect selected group`);
    this.ippsService.deselectItem();
  }

  searchPeople(): void {
    let filterString = '';
    let searchString = '*';

    if (this.currentAnyFieldSearch.value.length > 0) {
      searchString = this.currentAnyFieldSearch.value;
    }

    let searchRequestPayload = {
      search: searchString,
      skip: (this.currentPage.value - 1) * this.pageSize.value,
      select: this.columns
    } as SearchFunctionRequestPayload;

    if (filterString.length > 0) {
      searchRequestPayload.filter = filterString;
    }

    console.log(searchRequestPayload);
    
    this.ippsService.searchPeople(searchRequestPayload);
  }
}
