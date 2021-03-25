import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '@cosmos/user-auth';

@Component({
  selector: 'cosmos-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private userAuthService: UserAuthService
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
