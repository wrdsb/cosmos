import { Component, OnInit } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import { EnvironmentService } from '@cosmos/environment';
import { Menu } from "@cosmos/types";
import { ChassisService } from '@cosmos/chassis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isIframe = false;
  loggedIn = false;

  constructor(
    public environmentService: EnvironmentService,
    public chassisService: ChassisService,
    private broadcastService: BroadcastService,
    private authService: MsalService
  ) {}

  ngOnInit(): void {
    this.chassisService.setHeaderContent(
      {
        links: [
            {
                link: '/aad/groups',
                name: 'AAD Groups'
            },
            {
                link: '/aad/group-memberships',
                name: 'AAD Group Memberships'
            },
            {
                link: '/aad/users',
                name: 'AAD Users'
            }
        ]
      }
    );

    this.chassisService.setFooterContent(
      {
        links: [
            {
                link: '/aad/groups',
                name: 'AAD Groups'
            },
            {
                link: '/aad/group-memberships',
                name: 'AAD Group Memberships'
            },
            {
                link: '/aad/users',
                name: 'AAD Users'
            }
        ]
      }
    );

    this.isIframe = window !== window.parent && !window.opener;

    this.checkoutAccount();

    this.broadcastService.subscribe('msal:loginSuccess', () => {
      this.checkoutAccount();
    });

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError.errorMessage);
        return;
      }

      console.log('Redirect Success: ', response);
    });

    this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
      console.log('MSAL Logging: ', message);
    }, {
      correlationId: CryptoUtils.createNewGuid(),
      piiLoggingEnabled: false
    }));
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }
}
