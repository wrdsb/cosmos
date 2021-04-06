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
        menuID: 'groupsMenu',
        menuTitle: 'Groups',
        links: [
          {
            linkTitle: 'Groups Dashboard',
            routerLink: '/groups',
            icon: 'dashboard'
          },
          {
            linkTitle: 'Groups Search',
            routerLink: '/groups/search',
            icon: 'group'
          },
          {
            linkTitle: 'Membership Definitions',
            routerLink: '/groups/memberships/definitions',
            icon: 'group'
          },
          {
            linkTitle: 'Membership Overrides',
            routerLink: '/groups/memberships/overrides',
            icon: 'group'
          }
        ]
      },
      {
        menuID: 'calendarMenu',
        menuTitle: 'Calendar',
        links: [
          {
            linkTitle: 'Calendar Dashboard',
            routerLink: '/calendar',
            icon: 'dashboard'
          },
          {
            linkTitle: 'Calendars Search',
            routerLink: '/calendar/search',
            icon: 'calendar_today'
          },
          {
            linkTitle: 'Membership Overrides',
            routerLink: '/calendar/memberships/overrides',
            icon: 'group'
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
