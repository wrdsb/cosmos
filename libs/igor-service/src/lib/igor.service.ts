import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

import { IGORGroup } from '@cosmos/types';

@Injectable({
  providedIn: 'root'
})
export class IGORService {
  private pingURL = 'https://wrdsb-igor3.azurewebsites.net/api/ping';
  
  private googleGroupsCommandURL = 'https://wrdsb-igor3.azurewebsites.net/api/google-group-command';
  private googleGroupsQueryURL = 'https://wrdsb-igor3.azurewebsites.net/api/groups-query';
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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  doPing(): void {
    console.log('Pinging IGOR...');

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
          throw 'error pinging IGOR';
        }),
        tap(_ => {
          this.pingRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('success pinging IGOR');
        })
      )
      .subscribe(response => this.pingState.next(response));
  }

  listGroups(list: string): Observable<IGORGroup[]> {
    let req = {
      operation: 'list',
      payload: list
    };
    console.log('IGOR: list groups');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let groups = this.http.post<IGORGroup[]>(this.googleGroupsQueryURL, req, this.httpOptions);
    return groups;
  }
}
