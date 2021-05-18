import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { SearchService } from "./search.service";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { GoogleCalendar, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarsService extends SearchService<GoogleCalendar> {
  constructor(
    protected messagesService: MessagesService,
    protected viewfinderService: ViewfinderService
  ) {
    super(messagesService, viewfinderService);
  }

  public selectItem(itemID: string): void {
    const operation = 'googleCalendarFind';
    this.findItem(operation, itemID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as GoogleCalendar);
    });
  }

  public deselectItem() {
    this.itemSelected.next(false);
    this.selectedItem.next(null);
  }

  findCalendar(personID): void {
    const operation = 'googleCalendarFind';
    console.log('Google Calendars Service: findCalendar()');

    this.findItem(operation, personID).subscribe((response) => {
      this.itemSelected.next(true);
      this.selectedItem.next(response.payload.documents[0] as GoogleCalendar);
    });
  }

  
  searchCalendars(query?: SearchFunctionRequestPayload): void {
    const operation = 'googleCalendarsSearch';
    console.log('Google Calendars Service: searchCalendars()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["email asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);

    this.searchItems(operation, searchRequestOptions).subscribe((response) => {
      this.searchResponse.next(response);
      this.itemsList.next(response.payload.documents as GoogleCalendar[]);
    });
  }
}
