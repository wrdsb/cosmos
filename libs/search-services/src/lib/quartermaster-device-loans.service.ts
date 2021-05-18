import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { SearchService } from './search.service';

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { DeviceLoan, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class QuartermasterDeviceLoansService extends SearchService<DeviceLoan> {
  constructor(
    protected messagesService: MessagesService,
    protected viewfinderService: ViewfinderService
  ) {
    super(messagesService, viewfinderService);
  }


  public selectItem(itemID: string): void {
    const operation = 'quartermasterDeviceLoanFind';
    this.findItem(operation, itemID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as DeviceLoan);
    });
  }


  public deselectItem() {
    this.itemSelected.next(false);
    this.selectedItem.next(null);
  }


  findLoan(personID): void {
    const operation = 'quartermasterDeviceLoanFind';
    console.log('Quartermaster Device Loans Service: findLoan()');

    this.findItem(operation, personID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as DeviceLoan);
    });
  }

 
  searchLoans(query?: SearchFunctionRequestPayload): void {
    const operation = 'quartermasterDeviceLoansSearch';
    console.log('Quartermaster Device Loans Service: searchLoans()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["assetID asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    this.searchItems(operation, searchRequestOptions).subscribe((response) => {
      this.searchResponse.next(response);
      this.itemsList.next(response.payload.documents as DeviceLoan[]);
    });
  }
}
