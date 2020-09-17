import { Component, OnInit } from '@angular/core';

import { EnvironmentService } from "@cosmos/environment";
import { ChassisService } from '../chassis.service';

import { Menu } from "@cosmos/types";
import { UserAuthService } from '@cosmos/user-auth';

@Component({
  selector: 'cosmos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.headerEnabled$;

  visible: boolean;
  visible$ = this.chassisService.headerVisible$;

  content: Menu;
  content$ = this.chassisService.headerContent$;

  headerMenu: Menu;

  constructor(
    private userAuthService: UserAuthService,
    private environmentService: EnvironmentService,
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    this.getEnabled();
    this.getVisible();
    this.getContent();
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
}
