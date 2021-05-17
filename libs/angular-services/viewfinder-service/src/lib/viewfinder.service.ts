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

  private pingURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ping';
  
  private googleGroupsFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-group-find';
  private googleGroupsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-groups-search';

  private googleCalendarFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-calendar-find';
  private googleCalendarsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-calendars-search';

  private ippsPersonFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ipps-person-find';
  private ippsPeopleSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ipps-people-search';

  private quartermasterDeviceLoanFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/device-loan-find';
  private quartermasterDeviceLoansSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/device-loans-search';

  private atsAssetFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ats-asset-find';
  private atsAssetsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ats-assets-search';

  private quartermasterAssetFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-asset-find';
  private quartermasterAssetsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-assets-search';

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

    this.http.get<PingFunctionResponse>(this.pingURL, this.httpOptions)
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

  findGoogleGroup(groupID: string): Observable<SearchFunctionResponse> {
    return this.findItem(this.googleGroupsFindURL, groupID);
  }

  searchGoogleGroups(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    return this.searchItems(this.googleGroupsSearchURL, query);
  }

  findGoogleCalendar(calendarID: string): Observable<SearchFunctionResponse> {
    return this.findItem(this.googleCalendarFindURL, calendarID);
  }

  searchGoogleCalendars(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    return this.searchItems(this.googleCalendarsSearchURL, query);
  }

  findIPPSPerson(personID: string): Observable<SearchFunctionResponse> {
    return this.findItem(this.ippsPersonFindURL, personID);
  }

  searchIPPSPeople(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    return this.searchItems(this.ippsPeopleSearchURL, query);
  }

  findQuartermasterDeviceLoan(loanID: string): Observable<SearchFunctionResponse> {
    return this.findItem(this.quartermasterDeviceLoanFindURL, loanID);
  }

  searchQuartermasterDeviceLoans(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    return this.searchItems(this.quartermasterDeviceLoansSearchURL, query);
  }

  findATSAsset(assetID: string): Observable<SearchFunctionResponse> {
    return this.findItem(this.atsAssetFindURL, assetID);
  }

  searchATSAssets(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    return this.searchItems(this.atsAssetsSearchURL, query);
  }

  findQuartermasterAsset(assetID: string): Observable<SearchFunctionResponse> {
    return this.findItem(this.quartermasterAssetFindURL, assetID);
  }

  searchQuartermasterAssets(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    return this.searchItems(this.quartermasterAssetsSearchURL, query);
  }


  findItem(findURL: string, itemID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findItem()');

    let searchFunctionRequest = {
      payload: {
        id: itemID
      }
    };

    return this.doSearchRequest(findURL, searchFunctionRequest);
  }

  
  searchItems(searchURL: string, query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchItems()');

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
