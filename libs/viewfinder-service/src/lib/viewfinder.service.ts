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
  private pingURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ping';
  
  private googleGroupsFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-group-find';
  private googleGroupsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-groups-search';
  
  private googleCalendarsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-calendars-search';

  private pingState: BehaviorSubject<PingFunctionResponse> = new BehaviorSubject({
    payload: {
      message: "",
      chatter: "",
      status: 0,
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
    console.log('Viewfinder Service: doPing()');
    console.log('Pinging Viewfinder...');

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
            payload: {
              message: "error",
              chatter: "error",
              status: 200,
              timestamp: "timestamp"
            }
          });
          throw 'error pinging Viewfinder';
        }),
        tap(_ => {
          this.pingRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('success pinging Viewfinder');
        })
      )
      .subscribe(response => this.pingState.next(response));
  }

  findGoogleGroup(groupID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findGoogleGroup()');

    let searchFunctionRequest = {
      payload: {
        id: groupID
      }
    };

    return this.http.post<SearchFunctionResponse>(this.googleGroupsFindURL, searchFunctionRequest, this.httpOptions)
    .pipe(
      tap(_ => console.log('Viewfinder Service: Google Group find request')),
      retry(2),
      catchError(error => {
        console.log('Viewfinder Service: catch find request error');
        this.searchRequestState.next({
          status: Status.ERROR,
          response: '',
          error: error
        });
        throw 'Viewfinder Service: error finding via Viewfinder';
      }),
      tap(_ => {
        this.searchRequestState.next({
          status: Status.SUCCESS,
          response: 'success',
          error: ''
        });
        console.log('Viewfinder Service: success searching via Viewfinder');
      })
    );
}

  searchGoogleGroups(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchGoogleGroups()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.googleGroupsSearchURL, searchFunctionRequest, this.httpOptions)
      .pipe(
        tap(_ => console.log('searh request')),
        retry(2),
        catchError(error => {
          console.log('catch search request error');
          this.searchRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          throw 'error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('success searching Viewfinder');
        })
      );
  }


  searchGoogleCalendars(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchGoogleCalendars()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["summary asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.googleCalendarsSearchURL, searchFunctionRequest, this.httpOptions)
      .pipe(
        tap(_ => console.log('searh request')),
        retry(2),
        catchError(error => {
          console.log('catch search request error');
          this.searchRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          throw 'error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('success searching Viewfinder');
        })
      );
  }
}
