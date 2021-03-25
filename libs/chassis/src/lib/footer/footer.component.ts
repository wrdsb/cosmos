import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from "@cosmos/environment";
import { ChassisService } from '../chassis.service';
import { UserAuthService } from '@cosmos/user-auth';

import { Menu } from '@cosmos/types';

@Component({
  selector: 'cosmos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appName = this.environmentService.appName;
  isLoggedIn$: Observable<boolean>;

  enabled: boolean;
  enabled$ = this.chassisService.footerEnabled$;

  visible: boolean;
  visible$ = this.chassisService.footerVisible$;

  content: Menu;
  content$ = this.chassisService.footerContent$;

  footerMenu: Menu;

  constructor(
    private userAuthService: UserAuthService,
    public environmentService: EnvironmentService,
    private chassisService: ChassisService
  ) {
    this.isLoggedIn$ = this.userAuthService.isLoggedIn$;
  }

  ngOnInit(): void {
    this.getEnabled();
    this.getVisible();
    this.getContent();
  }

  getEnabled(): void {
    this.enabled$.subscribe(enabled => 
      this.enabled = enabled
    );
    console.log(`footer enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`footer visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`footer content: ${this.content}`);
  }

  toggleSidebarOuterLeft() {
    this.chassisService.toggleSidebarOuterLeft();
    console.log('toggle sidebarOuterLeft');
  }

  toggleNotificationsPanel() {
    this.chassisService.setsidebarOuterRightContent('Notifications');
    this.chassisService.toggleSidebarOuterRight();
    console.log('toggle sidebarOuterRight');
  }

  toggleHelpPanel() {
    this.chassisService.setsidebarOuterRightContent('Help');
    this.chassisService.toggleSidebarOuterRight();
    console.log('toggle sidebarOuterRight');
  }

  toggleFeedbackPanel() {
    this.chassisService.setsidebarOuterRightContent('Feedback');
    this.chassisService.toggleSidebarOuterRight();
    console.log('toggle sidebarOuterRight');
  }

  toggleSettingsPanel() {
    this.chassisService.setsidebarOuterRightContent('Settings');
    this.chassisService.toggleSidebarOuterRight();
    console.log('toggle sidebarOuterRight');
  }

  toggleAccountPanel() {
    this.chassisService.setsidebarOuterRightContent('Account');
    this.chassisService.toggleSidebarOuterRight();
    console.log('toggle sidebarOuterRight');
  }
}
