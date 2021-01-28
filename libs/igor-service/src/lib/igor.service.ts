import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { PingFunctionResponse, PingRequestState, Status, GoogleGroupStoreFunctionRequestPayload } from "@cosmos/types";
import { GroupQueryFunctionResponse, ListGroupsRequestState } from "@cosmos/types";

import { GoogleGroup } from '@cosmos/types';

@Injectable({
  providedIn: 'root'
})
export class IGORService {
  private apiTargetAppName = 'IGOR';
  private serviceName = `${this.apiTargetAppName} Service`;

  private pingURL = 'https://wrdsb-igor3.azurewebsites.net/api/ping';
  
  private googleGroupsCommandURL = 'https://wrdsb-igor3.azurewebsites.net/api/google-group-command';
  private googleGroupsQueryURL = 'https://wrdsb-igor3.azurewebsites.net/api/group-query';
  private googleGroupsSearchURL = '';

  private usersURL = '';

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


  private listGroupsResponse: BehaviorSubject<GroupQueryFunctionResponse> = new BehaviorSubject({
    payload: [
      {
        name: "Loading...",
        email: "Loading..."      
      }
    ]
  });
  private listGroupsRequestState: BehaviorSubject<ListGroupsRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly listGroupsResponse$: Observable<GroupQueryFunctionResponse> = this.listGroupsResponse.asObservable();
  public readonly listGroupsRequestState$: Observable<ListGroupsRequestState> = this.listGroupsRequestState.asObservable();

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
            payload: {
              message: "error",
              chatter: "error",
              status: 200,
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

  listGroups(list: string): void {
    console.log('IGOR: list groups');

    this.listGroupsRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('operation', 'list')
        .set('payload', list)
    };
    this.http.get<GroupQueryFunctionResponse>(this.googleGroupsQueryURL, httpOptions)
      .pipe(
        tap(_ => console.log('tap')),
        retry(2),
        catchError(error => {
          console.log('catch error');
          this.listGroupsRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          this.listGroupsResponse.next({
            payload: []
          });
          throw 'error listing groups';
        }),
        tap(_ => {
          this.listGroupsRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('success listing groups');
        })
      )
      .subscribe(response => this.listGroupsResponse.next(response));
  }
}
