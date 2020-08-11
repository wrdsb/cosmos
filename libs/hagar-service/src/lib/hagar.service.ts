import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from '@cosmos/user-auth';

import { AADGroup } from '@cosmos/types';
import { AADUser } from '@cosmos/types';

import { GROUPS } from './mocks/aad-groups';
import { USERS } from './mocks/aad-users';

@Injectable({
  providedIn: 'root'
})
export class HagarService {
  private pingURL = 'https://wrdsb-hagar.azurewebsites.net/api/ping';
  private groupsURL = '';
  private usersURL = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient, private msalService: UserAuthService) {}

  getPing(): Observable<string> {
    console.log('ping hagar');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<string>(this.pingURL, this.httpOptions);
  }

  getGroups(): Observable<AADGroup[]> {
    return of(GROUPS);
  }

  getUsers(): Observable<AADUser[]> {
    return of(USERS);
  }
}
