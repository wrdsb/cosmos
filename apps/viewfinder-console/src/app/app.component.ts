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
        menuID: 'aadMenu',
        menuTitle: 'AAD',
        links: [
          {
            linkTitle: 'AAD Dashboard',
            routerLink: '/aad',
            icon: 'dashboard'
          }
        ]
      },
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
      },
      {
        menuID: 'googleMenu',
        menuTitle: 'Google',
        links: [
          {
            linkTitle: 'Google Dashboard',
            routerLink: '/google',
            icon: 'dashboard'
          },
          {
            linkTitle: 'Google Groups',
            routerLink: '/google/groups',
            icon: 'group'
          },
          {
            linkTitle: 'Google Calendar',
            routerLink: '/google/calendar',
            icon: 'calendar_today'
          }
        ]
      },
      {
        menuID: 'ippsMenu',
        menuTitle: 'IPPS',
        links: [
          {
            linkTitle: 'IPPS Dashboard',
            routerLink: '/ipps',
            icon: 'dashboard'
          }
        ]
      },
      {
        menuID: 'peopleMenu',
        menuTitle: 'People',
        links: [
          {
          linkTitle: 'People Dashboard',
          routerLink: '/people',
          icon: 'dashboard'
          }
        ]
      },
      {
        menuID: 'quartermasterMenu',
        menuTitle: 'Quartermaster',
        links: [
          {
            linkTitle: 'Quartermaster Dashboard',
            routerLink: '/quartermaster',
            icon: 'dashboard'
          },
          {
            linkTitle: 'Assets Search',
            routerLink: '/quartermaster/assets/search',
            icon: 'search'
          }
        ]
      },
      {
        menuID: 'schoolsMenu',
        menuTitle: 'Schools',
        links: [
          {
            linkTitle: 'Schools Dashboard',
            routerLink: '/schools',
            icon: 'dashboard'
          }
        ]
      },
      {
        menuID: 'teamViewerMenu',
        menuTitle: 'TeamViewer',
        links: [
          {
            linkTitle: 'Teamviewer Dashboard',
            routerLink: '/teamviewer',
            icon: 'dashboard'
          }
        ]
      },
      {
        menuID: 'trilliumMenu',
        menuTitle: 'Trillium',
        links: [
          {
            linkTitle: 'Trillium Dashboard',
            routerLink: '/trillium',
            icon: 'dashboard'
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
  };

  login() {
    this.userAuthService.login();
  }

  logout() {
    this.userAuthService.logout();
  }
}
