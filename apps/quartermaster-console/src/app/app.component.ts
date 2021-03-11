import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from '@cosmos/environment';
import { ChassisService } from '@cosmos/chassis';
import { UserAuthService } from '@cosmos/user-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isIframe = false;
  isLoggedIn$: Observable<boolean>;

  constructor(
    public environmentService: EnvironmentService,
    public chassisService: ChassisService,
    private userAuthService: UserAuthService
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
