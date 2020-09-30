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
export class ViewfinderService {
  private pingURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ping';
  
  private googleGroupsCommandURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-group-command';
  private googleGroupsQueryURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-group-query';
  private googleGroupsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-groups-search';

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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  doPing(): void {
    console.log('Pinging Viewfinder...');

    this.pingRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.http.get<PingFunctionResponse>(this.pingURL, this.httpOptions)
      .pipe(
        tap(_ => console.log('tap')),
        retry(2),
        catchError(error => {
          console.log('catch error');
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
}
