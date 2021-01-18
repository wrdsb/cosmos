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

import { DeviceLoan, SearchFunctionRequestPayload, SearchFunctionResponse } from "@cosmos/types";
import { DeviceLoansService } from '../device-loans.service';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DeviceLoanMetaDialogComponent } from "../device-loan-meta-dialog/device-loan-meta-dialog.component";

@Component({
  selector: 'cosmos-device-loans-search',
  templateUrl: './device-loans-search.component.html',
  styleUrls: ['./device-loans-search.component.scss']
})
export class DeviceLoansSearchComponent implements OnInit {
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
    'assetID',
    'deviceType',
    'locationName',
    'isLoaned',
    'hasInventoryRecord',
    'totalLoans',
    'recordActions'
  ]);

  onLoanFilterFormControl = new FormControl();
  wasLoanedFilterFormControl = new FormControl();
  hasInventoryRecordFilterFormControl = new FormControl();
  deviceTypeFilterFormControl = new FormControl();
  locationNameFilterFormControl = new FormControl();

  assetIDSearchFormControl = new FormControl();
  anyFieldSearchFormControl = new FormControl();

  currentOnLoanFilter = new BehaviorSubject<string>('');
  currentWasLoanedFilter = new BehaviorSubject<string>('');
  currentHasInventoryRecordFilter = new BehaviorSubject<string>('');
  currentDeviceTypeFilter = new BehaviorSubject<string>('');
  currentLocationNameFilter = new BehaviorSubject<string>('');
  currentAssetIDSearch = new BehaviorSubject<string>('');
  currentAnyFieldSearch = new BehaviorSubject<string>('');

  currentSearch = new BehaviorSubject<string>('*');

  currentPage = new BehaviorSubject<number>(1);
  pageSize = new BehaviorSubject<number>(20);
  maxPage = new BehaviorSubject<number>(1);
  
  //public searchDeviceLoansRequestState$: Observable<ListDeviceLoansRequestState>;
  //public searchDeviceLoansResponse$: Observable<DeviceLoanQueryFunctionResponse>;
  
  public searchResponse$: Observable<SearchFunctionResponse>;
  public totalRecords$: Observable<number>;
  public maxPage$: Observable<number>;

  public loansPage$: Observable<DeviceLoan[]>;

  public loanSelected$: Observable<boolean>;
  public selectedLoan$: Observable<DeviceLoan>;

  deviceLoanMetaDialogRef: MatDialogRef<DeviceLoanMetaDialogComponent>;

  constructor(
    private deviceLoansService: DeviceLoansService,
    public dialog: MatDialog
  ) {
    this.searchResponse$ = this.deviceLoansService.searchResponse$;
    this.totalRecords$ = this.searchResponse$.pipe(map(response => response.payload.count));
    this.loansPage$ = this.deviceLoansService.loansList$;
    this.maxPage$ = this.totalRecords$.pipe(map(totalRecords => Math.ceil(totalRecords / this.pageSize.value)));
    this.maxPage$.subscribe(this.maxPage);

    this.loanSelected$ = this.deviceLoansService.loanSelected$;
    this.selectedLoan$ = this.deviceLoansService.selectedLoan$;
  }

  ngOnInit(): void {
    this.searchLoans();
  }

  ngAfterViewInit() {
    this.onLoanFilterFormControl.valueChanges
      .subscribe(onLoan => {
        console.log(`onLoan Filter: ${onLoan}`);
        this.currentOnLoanFilter.next(onLoan);
        this.searchLoans();
      }
    );
    this.wasLoanedFilterFormControl.valueChanges
      .subscribe(wasLoaned => {
        console.log(`wasLoaned Filter ${wasLoaned}`);
        this.currentWasLoanedFilter.next(wasLoaned);
        this.searchLoans();
      }
    );
    this.hasInventoryRecordFilterFormControl.valueChanges
      .subscribe(hasInventoryRecord => {
        console.log(`inInventory Filter ${hasInventoryRecord}`);
        this.currentHasInventoryRecordFilter.next(hasInventoryRecord);
        this.searchLoans();
      }
    );
    this.deviceTypeFilterFormControl.valueChanges
      .subscribe(deviceType => {
        console.log(`deviceType Filter: ${deviceType}`);
        this.currentDeviceTypeFilter.next(deviceType);
        this.searchLoans();
      }
    );
    this.locationNameFilterFormControl.valueChanges
      .subscribe(locationName => {
        console.log(`locationName Filter: ${locationName}`);
        this.currentLocationNameFilter.next(locationName);
        this.currentPage.next(1);
        this.searchLoans();
      }
    );
    this.assetIDSearchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(assetID => {
        console.log(`assetID Search: ${assetID}`);
        this.currentAssetIDSearch.next(assetID);
        this.currentPage.next(1);
        this.searchLoans();
      }
    );
    this.anyFieldSearchFormControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        console.log(`searchTerm Search: ${searchTerm}`);
        this.currentAnyFieldSearch.next(searchTerm);
        this.currentPage.next(1);
        this.searchLoans();
      }
    );
  }

  pageBeginning(): void {
    this.currentPage.next(1);
    this.searchLoans();
  }

  pageUp(): void {
    const nextPage = this.currentPage.value - 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchLoans();
    }
  }

  pageDown(): void {
    const nextPage = this.currentPage.value + 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchLoans();
    }
  }

  pageEnd(): void {
    this.currentPage.next(this.maxPage.value);
    this.searchLoans();
  }

  nextPageValid(nextPage): boolean {
    return ( nextPage >= 1 && nextPage <= this.maxPage.value ) ? true : false;
  }

  selectLoan(loanID: string): void {
    console.log(`Show details for ${loanID}`);

    this.deviceLoansService.selectLoan(loanID);

    this.deviceLoanMetaDialogRef = this.dialog.open(DeviceLoanMetaDialogComponent, {
      width: '800px'
    });
  }

  deselectLoan(): void {
    console.log(`Deselect selected device loan`);
    this.deviceLoansService.deselectLoan();
  }

  searchLoans(): void {
    let filterString = '';
    let searchString = '*';

    if (this.currentOnLoanFilter.value.length > 0 && this.currentOnLoanFilter.value !== 'all') {
      filterString += `isLoaned eq ${this.currentOnLoanFilter.value}`;
    }

    if (this.currentWasLoanedFilter.value.length > 0 && this.currentWasLoanedFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `wasLoaned eq ${this.currentWasLoanedFilter.value}`;
    }

    if (this.currentHasInventoryRecordFilter.value.length > 0 && this.currentHasInventoryRecordFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `hasInventoryRecord eq ${this.currentHasInventoryRecordFilter.value}`;
    }

    if (this.currentDeviceTypeFilter.value.length > 0 && this.currentDeviceTypeFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      if (this.currentDeviceTypeFilter.value !== 'other') {
        filterString += `deviceType eq '${this.currentDeviceTypeFilter.value}'`;
      } else {
        filterString += `not search.in(deviceType, 'iPad,Chromebook', ',')`;
      }
    }

    if (this.currentLocationNameFilter.value.length > 0 && this.currentLocationNameFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `locationName eq '${this.currentLocationNameFilter.value}'`;
    }

    if (this.currentAssetIDSearch.value.length > 0) {
      searchString = this.currentAssetIDSearch.value;
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
    
    this.deviceLoansService.searchLoans(searchRequestPayload);
  }
}

interface searchLoansRequest {
  search?: string;
  page?: number;
}