import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType } from '@azure/msal-browser';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { UserAuth2Service } from '@cosmos/user-auth2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private userAuthService: UserAuth2Service,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {
    this.isLoggedIn$ = this.userAuthService.isLoggedIn$;
  }

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
        if (result?.payload?.account) {
          this.authService.instance.setActiveAccount(result.payload.account);
        }
      });
    
    this.setIsLoggedIn();
    
  }
  
  setIsLoggedIn() {
    this.userAuthService.setIsLoggedIn();
  }

}
