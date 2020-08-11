import { Injectable } from '@angular/core';
import * as Msal from 'msal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private accessToken: any;
  public clientApplication: Msal.UserAgentApplication = null;

  constructor() {}

  public getAccessToken(): Observable<any> {
    console.log('getting access token...');
    if (
      localStorage.getItem('msal.idtoken') !== undefined &&
      localStorage.getItem('msal.idtoken') != null
    ) {
      this.accessToken = localStorage.getItem('msal.idtoken');
      console.log(`access token: ${this.accessToken}`);
    }
    return this.accessToken;
  }
}
