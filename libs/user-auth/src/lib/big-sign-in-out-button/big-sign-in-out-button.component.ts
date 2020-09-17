import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'cosmos-big-sign-in-out-button',
  templateUrl: './big-sign-in-out-button.component.html',
  styleUrls: ['./big-sign-in-out-button.component.scss']
})
export class BigSignInOutButtonComponent implements OnInit {
  loggedIn = false;

  constructor(
    private authService: MsalService
  ) { }

  ngOnInit(): void {
    this.checkoutAccount();
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }

  login() {
    this.authService.loginRedirect();
  }

  logout() {
    this.authService.logout();
  }
}
