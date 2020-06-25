import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

import '@microsoft/mgt/dist/es6/components/mgt-person/mgt-person';
import { User } from "@microsoft/microsoft-graph-types";
import { GraphService } from '@cosmos/msgraph-service';

import { EnvironmentService } from "@cosmos/environment";
import { ChassisService } from '../chassis.service';

import { Menu } from "@cosmos/ui";
import { UINavigationService } from "@cosmos/ui-navigation";

@Component({
  selector: 'cosmos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  profile: User;
  profile$ = this.graphService.getProfile();

  appName = this.environmentService.appName;

  enabled: boolean;
  enabled$ = this.chassisService.headerEnabled$;

  visible: boolean;
  visible$ = this.chassisService.headerVisible$;

  content: string;
  content$ = this.chassisService.headerContent$;

  headerMenu: Menu;

  showSlideinLeft: boolean;
  showSlideinLeft$ = this.chassisService.slideinLeftVisible$;

  showSlideinRight: boolean;
  showSlideinRight$ = this.chassisService.slideinRightVisible$;

  constructor(
    private environmentService: EnvironmentService,
    private chassisService: ChassisService,
    private navigationService: UINavigationService,
    private authService: MsalService,
    private graphService: GraphService
  ) { }

  ngOnInit(): void {
    this.getEnabled();
    this.getVisible();
    this.getContent();
    this.getHeaderMenu();

    this.checkoutAccount();
    this.getProfile();
  }

  getEnabled(): void {
    this.enabled$.subscribe(enabled => 
      this.enabled = enabled
    );
    console.log(`header enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`header visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`header content: ${this.content}`);
  }

  getHeaderMenu(): void {
    this.navigationService.getHeader().subscribe(menu => this.headerMenu = menu);
  }

  getProfile() {
    this.profile$.subscribe(profile => 
      this.profile = profile
    );
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }

  login() {
    this.authService.loginPopup();
  }

  logout() {
    this.authService.logout();
  }
}
