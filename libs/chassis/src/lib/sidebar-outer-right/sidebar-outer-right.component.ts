import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-sidebar-outer-right',
  templateUrl: './sidebar-outer-right.component.html',
  styleUrls: ['./sidebar-outer-right.component.scss']
})
export class SidebarOuterRightComponent implements OnInit {
  public title = 'Panel Title';

  enabled: boolean;
  enabled$ = this.chassisService.sidebarOuterRightEnabled$;

  content: string;
  content$ = this.chassisService.sidebarOuterRightContent$;

  constructor(
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    this.getEnabled();
    this.getContent();
  }

  getEnabled(): void {
    this.enabled$.subscribe(enabled => 
      this.enabled = enabled
    );
    console.log(`sidebar-outer-right enabled: ${this.enabled}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`sidebar-outer-right content: ${this.content}`);
  }

  toggleSidebarOuterRight() {
    this.chassisService.toggleSidebarOuterRight();
    console.log('toggle sidebarOuterRight');
  }
}
