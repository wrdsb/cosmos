import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { Observable, Subject } from 'rxjs';

import { UserAuthService } from '@cosmos/user-auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private userAuthService: UserAuthService
  ) {
    this.isLoggedIn$ = this.userAuthService.isLoggedIn$;
  }

  ngOnInit(): void {
    this.setIsLoggedIn();
  }
  
  setIsLoggedIn() {
    this.userAuthService.setIsLoggedIn();
  }
}
