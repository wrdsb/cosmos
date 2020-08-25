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
  private pingURL = 'https://wrdsb-hagar.azurewebsites.net/api/ping';
  
  private aadGroupsCommandURL = 'https://wrdsb-hagar.azurewebsites.net/api/aad-group-command';
  private aadGroupsQueryURL = 'https://wrdsb-hagar.azurewebsites.net/api/aad-group-query';
  private aadGroupsSearchURL = '';
  
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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  doPing(): void {
    console.log('Pinging HAGAR...');

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
          throw 'error pinging HAGAR';
        }),
        tap(_ => {
          this.pingRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('success pinging HAGAR');
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
