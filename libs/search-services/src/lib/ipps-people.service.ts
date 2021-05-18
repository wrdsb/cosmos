import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { SearchService } from "./search.service";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { IPPSPerson, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class IPPSPeopleService extends SearchService<IPPSPerson> {
  constructor(
    protected messagesService: MessagesService,
    protected viewfinderService: ViewfinderService
  ) {
    super(messagesService, viewfinderService);
  }

  public selectItem(itemID: string): void {
    const operation = 'ippsPersonFind';
    this.findItem(operation, itemID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as IPPSPerson);
    });
  }

  public deselectItem() {
    this.itemSelected.next(false);
    this.selectedItem.next(null);
  }

  findPerson(personID): void {
    const operation = 'ippsPersonFind';
    console.log('IPPS People Service: findPerson()');

    this.findItem(operation, personID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as IPPSPerson);
    });
  }

  
  searchPeople(query?: SearchFunctionRequestPayload): void {
    const operation = 'ippsPeopleSearch';
    console.log('IPPS People Service: searchPeople()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["email asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);

    this.searchItems(operation, searchRequestOptions).subscribe((response) => {
      this.searchResponse.next(response);
      this.itemsList.next(response.payload.documents as IPPSPerson[]);
    });
  }
}
