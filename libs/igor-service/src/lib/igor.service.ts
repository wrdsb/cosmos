import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from '@cosmos/user-auth';

import { IGORGroup } from '@cosmos/types';
//import { AADUser } from '@cosmos/types';

import { GROUPS } from './mocks/aad-groups';
//import { USERS } from './mocks/aad-users';

@Injectable({
  providedIn: 'root'
})
export class IGORService {
  private pingURL = 'https://wrdsb-igor3.azurewebsites.net/api/ping';
  
  private googleGroupsCommandURL = 'https://wrdsb-igor3.azurewebsites.net/api/google-group-command';
  private googleGroupsQueryURL = 'https://wrdsb-igor3.azurewebsites.net/api/google-group-query';
  private googleGroupsSearchURL = '';

  private usersURL = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient,
    private msalService: UserAuthService
  ) {}

  getPing(): Observable<string> {
    console.log('IGOR: ping');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<string>(this.pingURL, this.httpOptions);
  }

  listGroups(): Observable<IGORGroup[]> {
    let req = {
      operation: 'list'
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
