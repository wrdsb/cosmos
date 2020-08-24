import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'cosmos-sign-in-out-button',
  templateUrl: './sign-in-out-button.component.html',
  styleUrls: ['./sign-in-out-button.component.scss']
})
export class SignInOutButtonComponent implements OnInit {
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
