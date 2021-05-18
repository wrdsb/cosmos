import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { SearchService } from "./search.service";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { Asset, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class QuartermasterAssetsService extends SearchService<Asset> {
  constructor(
    protected messagesService: MessagesService,
    protected viewfinderService: ViewfinderService
  ) {
    super(messagesService, viewfinderService);
  }

  public selectItem(itemID: string): void {
    const operation = 'quartermasterAssetFind';
    this.findItem(operation, itemID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as Asset);
    });
  }

  public deselectItem() {
    this.itemSelected.next(false);
    this.selectedItem.next(null);
  }

  findAsset(personID): void {
    const operation = 'quartermasterAssetFind';
    console.log('Quartermaster Asset Service: findAsset()');

    this.findItem(operation, personID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as Asset);
    });
  }

  
  searchAssets(query?: SearchFunctionRequestPayload): void {
    const operation = 'quartermasterAssetsSearch';
    console.log('Quartermaster Asset Service: searchPeople()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["assetID asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);

    this.searchItems(operation, searchRequestOptions).subscribe((response) => {
      this.searchResponse.next(response);
      this.itemsList.next(response.payload.documents as Asset[]);
    });
  }
}
