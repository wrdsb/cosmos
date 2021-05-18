import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { SearchService } from "./search.service";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { ATSAsset, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class ATSAssetsService extends SearchService<ATSAsset> {
  constructor(
    protected messagesService: MessagesService,
    protected viewfinderService: ViewfinderService
  ) {
    super(messagesService, viewfinderService);
  }

  public selectItem(itemID: string): void {
    const operation = 'atsAssetFind';
    this.findItem(operation, itemID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as ATSAsset);
    });
  }

  public deselectItem() {
    this.itemSelected.next(false);
    this.selectedItem.next(null);
  }

  findAsset(personID): void {
    const operation = 'atsAssetFind';
    console.log('ATS Assets Service: findAsset()');

    this.findItem(operation, personID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as ATSAsset);
    });
  }

  
  searchAssets(query?: SearchFunctionRequestPayload): void {
    const operation = 'atsAssetsSearch';
    console.log('ATS Assets Service: searchAssets()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["assetID asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);

    this.searchItems(operation, searchRequestOptions).subscribe((response) => {
      this.searchResponse.next(response);
      this.itemsList.next(response.payload.documents as ATSAsset[]);
    });
  }
}
