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

import { ATSAsset, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";
import { ATSAssetsService } from '@cosmos/search-services';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AssetDetailDialogComponent } from "../asset-detail-dialog/asset-detail-dialog.component";

@Component({
  selector: 'cosmos-ats-assets-search',
  templateUrl: './assets-search.component.html',
  styleUrls: ['./assets-search.component.scss']
})
export class AssetsSearchComponent implements OnInit {
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
    'status',
    'manufacturer',
    'modelName',
    'modelID',
    'location',
    'program',
    'project',
    'poDate',
    'serial',
    'assignedTo',
    'note',
    'position',
    'employee'
  ]);

  isAssignedFilterFormControl = new FormControl();
  statusFilterFormControl = new FormControl();
  modelNameFilterFormControl = new FormControl();
  programFilterFormControl = new FormControl();
  locationNameFilterFormControl = new FormControl();

  assetIDSearchFormControl = new FormControl();
  anyFieldSearchFormControl = new FormControl();

  currentIsAssignedFilter = new BehaviorSubject<string>('');
  currentStatusFilter = new BehaviorSubject<string>('');
  currentModelNameFilter = new BehaviorSubject<string>('');
  currentProgramFilter = new BehaviorSubject<string>('');
  currentLocationNameFilter = new BehaviorSubject<string>('');
  currentAssetIDSearch = new BehaviorSubject<string>('');
  currentAnyFieldSearch = new BehaviorSubject<string>('');

  currentSearch = new BehaviorSubject<string>('*');

  currentPage = new BehaviorSubject<number>(1);
  pageSize = new BehaviorSubject<number>(20);
  maxPage = new BehaviorSubject<number>(1);

  public searchRequestState$: Observable<SearchRequestState>;
  public searchResponse$: Observable<SearchFunctionResponse>;
  
  public totalRecords$: Observable<number>;
  public maxPage$: Observable<number>;

  private assetsPage: BehaviorSubject<ATSAsset[]> = new BehaviorSubject([
    {
      asset_id: "Loading..."
    }
  ]);
  public readonly assetsPage$: Observable<ATSAsset[]> = this.assetsPage.asObservable();

  public assetSelected$: Observable<boolean>;
  public selectedAsset$: Observable<ATSAsset>;

  assetDetailDialogRef: MatDialogRef<AssetDetailDialogComponent>;

  constructor(
    private assetsService: ATSAssetsService,
    public dialog: MatDialog
  ) {
    this.searchRequestState$ = this.assetsService.searchRequestState$;
    this.searchResponse$ = this.assetsService.searchResponse$;

    this.totalRecords$ = this.searchResponse$.pipe(map(response => response.payload.count));
    this.maxPage$ = this.totalRecords$.pipe(map(totalRecords => Math.ceil(totalRecords / this.pageSize.value)));
    this.maxPage$.subscribe(this.maxPage);

    this.assetsPage$ = this.assetsService.itemsList$;

    this.assetSelected$ = this.assetsService.itemSelected$;
    this.selectedAsset$ = this.assetsService.selectedItem$;
  }

  ngOnInit(): void {
    this.searchAssets();
  }

  ngAfterViewInit() {
    this.isAssignedFilterFormControl.valueChanges
      .subscribe(isAssigned => {
        console.log(`isAssigned Filter: ${isAssigned}`);
        this.currentIsAssignedFilter.next(isAssigned);
        this.searchAssets();
      }
    );
    this.statusFilterFormControl.valueChanges
      .subscribe(status => {
        console.log(`status Filter ${status}`);
        this.currentStatusFilter.next(status);
        this.searchAssets();
      }
    );
    this.modelNameFilterFormControl.valueChanges
      .subscribe(modelName => {
        console.log(`modelName Filter ${modelName}`);
        this.currentModelNameFilter.next(modelName);
        this.searchAssets();
      }
    );
    this.programFilterFormControl.valueChanges
      .subscribe(program => {
        console.log(`program Filter: ${program}`);
        this.currentProgramFilter.next(program);
        this.searchAssets();
      }
    );
    this.locationNameFilterFormControl.valueChanges
      .subscribe(locationName => {
        console.log(`locationName Filter: ${locationName}`);
        this.currentLocationNameFilter.next(locationName);
        this.currentPage.next(1);
        this.searchAssets();
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
        this.searchAssets();
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
        this.searchAssets();
      }
    );
  }

  pageBeginning(): void {
    this.currentPage.next(1);
    this.searchAssets();
  }

  pageUp(): void {
    const nextPage = this.currentPage.value - 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchAssets();
    }
  }

  pageDown(): void {
    const nextPage = this.currentPage.value + 1;
    if (this.nextPageValid(nextPage)) {
      this.currentPage.next(nextPage);
      this.searchAssets();
    }
  }

  pageEnd(): void {
    this.currentPage.next(this.maxPage.value);
    this.searchAssets();
  }

  nextPageValid(nextPage): boolean {
    return ( nextPage >= 1 && nextPage <= this.maxPage.value ) ? true : false;
  }

  selectAsset(assetID: string): void {
    console.log(`Show details for ${assetID}`);

    this.assetsService.selectItem(assetID);

    this.assetDetailDialogRef = this.dialog.open(AssetDetailDialogComponent, {
      width: '800px'
    });
  }

  deselectAsset(): void {
    console.log(`Deselect selected asset`);
    this.assetsService.deselectItem();
  }

  searchAssets(): void {
    let filterString = '';
    let searchString = '*';

    if (this.currentIsAssignedFilter.value.length > 0 && this.currentIsAssignedFilter.value !== 'all') {
      filterString += `isAssigned eq ${this.currentIsAssignedFilter.value}`;
    }

    if (this.currentStatusFilter.value.length > 0 && this.currentStatusFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `status eq ${this.currentStatusFilter.value}`;
    }

    if (this.currentModelNameFilter.value.length > 0 && this.currentModelNameFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `modelName eq ${this.currentModelNameFilter.value}`;
    }

    if (this.currentProgramFilter.value.length > 0 && this.currentProgramFilter.value !== 'all') {
      if (filterString.length > 0) {
        filterString += ' and ';
      }
      filterString += `program eq ${this.currentProgramFilter.value}`;
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
    
    this.assetsService.searchAssets(searchRequestPayload);
  }
}

interface searchLoansRequest {
  search?: string;
  page?: number;
}
