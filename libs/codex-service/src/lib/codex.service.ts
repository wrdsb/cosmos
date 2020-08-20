import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from '@cosmos/user-auth';

import { PingFunctionResponse } from "@cosmos/types";

import { GoogleGroup } from "@cosmos/types";

//import { AADGroup } from '@cosmos/types';
//import { AADUser } from '@cosmos/types';

//import { GROUPS } from './mocks/aad-groups';
//import { USERS } from './mocks/aad-users';

@Injectable({
  providedIn: 'root'
})
export class CodexService {
  private pingURL = 'https://wrdsb-codex.azurewebsites.net/api/ping';
  private searchURL = 'https://wrdsb-codex.azurewebsites.net/api/igor-groups-groups-search';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient,
    private msalService: UserAuthService
  ) {}

  getPing(): Observable<PingFunctionResponse> {
    console.log('ping codex');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<PingFunctionResponse>(this.pingURL, this.httpOptions);
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
