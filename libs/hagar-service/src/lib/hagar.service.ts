import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

import { AADGroup } from '@cosmos/types';

@Injectable({
  providedIn: 'root'
})
export class HagarService {
  private apiTargetAppName = 'HAGAR';
  private serviceName = `${this.apiTargetAppName} Service`;

  private pingURL = 'https://wrdsb-hagar.azurewebsites.net/api/ping';
  
  private aadGroupsCommandURL = 'https://wrdsb-hagar.azurewebsites.net/api/aad-group-command';
  private aadGroupsQueryURL = 'https://wrdsb-hagar.azurewebsites.net/api/aad-group-query';
  private aadGroupsSearchURL = '';
  
  private usersURL = '';

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

  listGroups(): Observable<AADGroup[]> {
    let req = {
      operation: 'list'
    };
    console.log('HAGAR: list groups');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let groups = this.http.post<AADGroup[]>(this.aadGroupsQueryURL, req, this.httpOptions);
    return groups;
  }
}
