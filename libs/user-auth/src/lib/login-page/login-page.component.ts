import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from "@cosmos/environment";
import { UserAuthService } from '@cosmos/user-auth';

@Component({
  selector: 'cosmos-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  appName = this.environmentService.appName;

  isLoggedIn$: Observable<boolean>;

  constructor(
    private userAuthService: UserAuthService,
    public environmentService: EnvironmentService,
  ) {
    this.isLoggedIn$ = this.userAuthService.isLoggedIn$;
  }


  ngOnInit(): void {
  }

  login() {
    this.userAuthService.login();
  }

  logout() {
    this.userAuthService.logout();
  }
}
