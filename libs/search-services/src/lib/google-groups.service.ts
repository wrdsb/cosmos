import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { SearchService } from "./search.service";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { GoogleGroup, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class GoogleGroupsService extends SearchService<GoogleGroup> {
  constructor(
    protected messagesService: MessagesService,
    protected viewfinderService: ViewfinderService
  ) {
    super(messagesService, viewfinderService);
  }

  public selectItem(itemID: string): void {
    const operation = 'googleGroupFind';
    this.findItem(operation, itemID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as GoogleGroup);
    });
  }

  public deselectItem() {
    this.itemSelected.next(false);
    this.selectedItem.next(null);
  }

  findGroup(personID): void {
    const operation = 'googleGroupFind';
    console.log('Google Groups Service: findGroup()');

    this.findItem(operation, personID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as GoogleGroup);
    });
  }

  
  searchGroups(query?: SearchFunctionRequestPayload): void {
    const operation = 'googleGroupsSearch';
    console.log('Google Groups Service: searchGroups()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["email asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);

    this.searchItems(operation, searchRequestOptions).subscribe((response) => {
      this.searchResponse.next(response);
      this.itemsList.next(response.payload.documents as GoogleGroup[]);
    });
  }
}
