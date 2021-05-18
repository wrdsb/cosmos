import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { Status } from "@cosmos/types";
import { PingFunctionResponse, PingRequestState } from "@cosmos/types";
import { SearchFunctionRequest, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class ViewfinderService {
  private apiTargetAppName = 'Viewfinder';
  private serviceName = `${this.apiTargetAppName} Service`;

  private viewfinderURLs = {
    pingURL: 'https://wrdsb-viewfinder.azurewebsites.net/api/ping',

    googleGroupFind: 'https://wrdsb-viewfinder.azurewebsites.net/api/google-group-find',
    googleGroupsSearch: 'https://wrdsb-viewfinder.azurewebsites.net/api/google-groups-search',

    googleCalendarFind: 'https://wrdsb-viewfinder.azurewebsites.net/api/google-calendar-find',
    googleCalendarsSearch: 'https://wrdsb-viewfinder.azurewebsites.net/api/google-calendars-search',

    ippsPersonFind: 'https://wrdsb-viewfinder.azurewebsites.net/api/ipps-person-find',
    ippsPeopleSearch: 'https://wrdsb-viewfinder.azurewebsites.net/api/ipps-people-search',

    quartermasterDeviceLoanFind: 'https://wrdsb-viewfinder.azurewebsites.net/api/device-loan-find',
    quartermasterDeviceLoansSearch: 'https://wrdsb-viewfinder.azurewebsites.net/api/device-loans-search',

    atsAssetFind: 'https://wrdsb-viewfinder.azurewebsites.net/api/ats-asset-find',
    atsAssetsSearch: 'https://wrdsb-viewfinder.azurewebsites.net/api/ats-assets-search',

    quartermasterAssetFind: 'https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-asset-find',
    quartermasterAssetsSearch: 'https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-assets-search',
  };

  private pingState: BehaviorSubject<PingFunctionResponse> = new BehaviorSubject({
    header: {
      status: 0,
      message: "",
      chatter: "",
      timestamp: "",
      authenticated: false,
      authorized: false,
      userName: "",
      userEmail: "",
      userRoles: []
    },
    payload: {
      status: 0,
      message: "",
      chatter: "",
      timestamp: ""
    }
  });
  private pingRequestState: BehaviorSubject<PingRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly pingState$: Observable<PingFunctionResponse> = this.pingState.asObservable();
  public readonly pingRequestState$: Observable<PingRequestState> = this.pingRequestState.asObservable();

  private searchRequestState: BehaviorSubject<SearchRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly searchRequestState$: Observable<SearchRequestState> = this.searchRequestState.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) {}


  doPing(): void {
    console.log(`${this.serviceName}: doPing()`);
    console.log(`Pinging ${this.apiTargetAppName}...`);

    this.pingRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.http.get<PingFunctionResponse>(this.viewfinderURLs.pingURL, this.httpOptions)
      .pipe(
        tap(_ => console.log('ping request')),
        retry(2),
        catchError(error => {
          console.log('catch ping request error');
          this.pingRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          this.pingState.next({
            header: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            },
            payload: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            }
          });
          throw `error pinging ${this.apiTargetAppName}`;
        }),
        tap(_ => {
          this.pingRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log(`success pinging ${this.apiTargetAppName}`);
        })
      )
      .subscribe(response => this.pingState.next(response));
  }


  findItem(operation: string, itemID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findItem()');

    const findURL = this.viewfinderURLs[operation];

    const searchFunctionRequest = {
      payload: {
        id: itemID
      }
    };

    return this.doSearchRequest(findURL, searchFunctionRequest);
  }

  
  searchItems(operation: string, query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchItems()');

    const searchURL = this.viewfinderURLs[operation];

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    return this.doSearchRequest(searchURL, searchFunctionRequest);
  }


  doSearchRequest(requestURL: string, searchFunctionRequest): Observable<SearchFunctionResponse> {
    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(requestURL, searchFunctionRequest, this.httpOptions)
      .pipe(
        tap(_ => console.log('Viewfinder Service: doSearchRequest()')),
        retry(2),
        catchError(error => {
          console.log('Viewfinder Service: catch search request error');
          this.searchRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          throw 'Viewfinder Service: error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('Viewfinder Service: success searching Viewfinder');
        })
      );
  }
}
