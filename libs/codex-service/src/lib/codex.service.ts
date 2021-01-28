import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

import { GoogleGroup } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class CodexService {
  private apiTargetAppName = 'Codex';
  private serviceName = `${this.apiTargetAppName} Service`;

  private pingURL = 'https://wrdsb-codex.azurewebsites.net/api/ping';

  private searchURL = 'https://wrdsb-codex.azurewebsites.net/api/igor-groups-groups-search';
  
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

  httpOptions = {
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

  search() {
    console.log('search codex');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    let body = {
      payload: {
        //count: true,
        //select: '*',
        //filter: '',
        //facets: '',
        //orderby: '',
        //search: '',
        //skip: '',
        //top: ''
      }
    };

    return this.http.post<GoogleGroup[]>(this.searchURL, body, this.httpOptions);
  }
}
