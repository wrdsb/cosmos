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

import { Asset, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";
import { QuartermasterAssetsService } from '@cosmos/search-services';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AssetDetailDialogComponent } from "../asset-detail-dialog/asset-detail-dialog.component";

@Component({
  selector: 'cosmos-quartermaster-assets-search',
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
    'serialNumber',
    'isAssignedPerson',
    'isAssignedBusinessUnit',
    'assignedToBusinessUnitName'
  ]);

  isAssignedPersonFilterFormControl = new FormControl();

  assetIDSearchFormControl = new FormControl();
  anyFieldSearchFormControl = new FormControl();

  currentIsAssignedPersonFilter = new BehaviorSubject<string>('');

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

  private assetsPage: BehaviorSubject<Asset[]> = new BehaviorSubject([
    {
      assetID: "Loading...",
      status: "Loading..."
    }
  ]);
  public readonly assetsPage$: Observable<Asset[]> = this.assetsPage.asObservable();

  public assetSelected$: Observable<boolean>;
  public selectedAsset$: Observable<Asset>;

  assetDetailDialogRef: MatDialogRef<AssetDetailDialogComponent>;

  constructor(
    private assetsService: QuartermasterAssetsService,
    public dialog: MatDialog
  ) {
    this.searchRequestState$ = this.assetsService.searchRequestState$;
    this.searchResponse$ = this.assetsService.searchResponse$;

    this.totalRecords$ = this.searchResponse$.pipe(map(response => response.payload.count));
    this.maxPage$ = this.totalRecords$.pipe(map(totalRecords => Math.ceil(totalRecords / this.pageSize.value)));
    this.maxPage$.subscribe(this.maxPage);

    this.assetsPage$ = this.assetsService.assetsList$;

    this.assetSelected$ = this.assetsService.assetSelected$;
    this.selectedAsset$ = this.assetsService.selectedAsset$;
  }

  ngOnInit(): void {
    this.searchAssets();
  }

  ngAfterViewInit() {
    this.isAssignedPersonFilterFormControl.valueChanges
      .subscribe(isAssignedPerson => {
        console.log(`isAssignedPerson Filter: ${isAssignedPerson}`);
        this.currentIsAssignedPersonFilter.next(isAssignedPerson);
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

    this.assetsService.selectAsset(assetID);

    this.assetDetailDialogRef = this.dialog.open(AssetDetailDialogComponent, {
      width: '800px'
    });
  }

  deselectAsset(): void {
    console.log(`Deselect selected asset`);
    this.assetsService.deselectAsset();
  }

  searchAssets(): void {
    let filterString = '';
    let searchString = '*';

    if (this.currentIsAssignedPersonFilter.value.length > 0 && this.currentIsAssignedPersonFilter.value !== 'all') {
      filterString += `isAssignedPerson eq ${this.currentIsAssignedPersonFilter.value}`;
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
