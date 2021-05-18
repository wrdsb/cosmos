import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class SearchService<T> {
  protected searchRequestState: BehaviorSubject<SearchRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly searchRequestState$: Observable<SearchRequestState> = this.searchRequestState.asObservable();

  protected searchResponse: BehaviorSubject<SearchFunctionResponse> = new BehaviorSubject({
    header: {
      message: "",
      chatter: "",
      status: 0,
      timestamp: ""
    },
    payload: {}
  });
  public readonly searchResponse$: Observable<SearchFunctionResponse> = this.searchResponse.asObservable();

  protected itemsList: BehaviorSubject<T[]> = new BehaviorSubject([]);
  public readonly itemsList$: Observable<T[]> = this.itemsList.asObservable();

  protected itemSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly itemSelected$: Observable<boolean> = this.itemSelected.asObservable();

  protected selectedItem: BehaviorSubject<T> = new BehaviorSubject<T>(null);
  public readonly selectedItem$: Observable<T> = this.selectedItem.asObservable();

  constructor(
    protected messagesService: MessagesService,
    protected viewfinderService: ViewfinderService
  ) {}


  protected findItem(operation: string, itemID: string): Observable<SearchFunctionResponse> {
    console.log('findItem()');

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.viewfinderService.findItem(operation, itemID)
      .pipe(
        tap(_ => console.log('IPPS Service: find request')),
        retry(2),
        catchError(error => {
          console.log('IPPS Service: catch find request error');
          this.searchRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          this.searchResponse.next({
            header: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            },
            payload: {}
          });
          throw 'IPPS Service: error finding IPPS Person';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('IPPS Service: success finding IPPS Person');
        })
      );
  }

  
  searchItems(operation: string, query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('searchItems()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["email asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.viewfinderService.searchItems(operation, searchRequestOptions)
      .pipe(
        tap(_ => console.log('IPPS Service: search request')),
        retry(2),
        catchError(error => {
          console.log('IPPS Service: catch search request error');
          this.searchRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          this.searchResponse.next({
            header: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            },
            payload: {}
          });
          throw 'IPPS Service: error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('IPPS Service: success searching Viewfinder');
        })
      );
  }
}
