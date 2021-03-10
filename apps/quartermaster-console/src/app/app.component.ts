import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { UserAuth2Service } from '@cosmos/user-auth2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular 11 - Angular v2 Sample';
  isIframe = false;
  isLoggedIn$: Observable<boolean>;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    private userAuthService: UserAuth2Service
  ) {
    this.isLoggedIn$ = this.userAuthService.isLoggedIn$;
  }

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal
  }

  login() {
    this.userAuthService.login();
  }

  logout() {
    this.userAuthService.logout();
  }
}
