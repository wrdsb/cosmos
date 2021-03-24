import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from '@cosmos/environment';
import { ChassisService } from '@cosmos/chassis';
import { UserAuthService } from '@cosmos/user-auth';

import { Menu } from "@cosmos/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isIframe = false;
  isLoggedIn$: Observable<boolean>;

  headerContent = {
    items: [
      {
        menuID: 'atsMenu',
        menuTitle: 'ATS',
        links: [
          {
            linkTitle: 'ATS Dashboard',
            routerLink: '/ats',
            icon: 'dashboard'
          },
          {
            linkTitle: 'Assets Search',
            routerLink: '/ats/assets/search',
            icon: 'search'
          }
        ]
      },
      {
        menuID: 'devicesMenu',
        menuTitle: 'Device Loans',
        links: [
          {
            linkTitle: 'Devices Loans Dashboard',
            routerLink: '/device-loans',
            icon: 'dashboard'
          },
          {
            linkTitle: 'Device Loans Search',
            routerLink: '/device-loans/search',
            icon: 'search'
          }
        ]
      }
    ]
  } as Menu;

  footerContent = {
    items: [
    ]
  } as Menu;

  constructor(
    public environmentService: EnvironmentService,
    public chassisService: ChassisService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.chassisService.setHeaderContent(this.headerContent);
    this.chassisService.setFooterContent(this.footerContent);

    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal
  }

  login() {
    this.userAuthService.login();
  }

  logout() {
    this.userAuthService.logout();
  }
}
