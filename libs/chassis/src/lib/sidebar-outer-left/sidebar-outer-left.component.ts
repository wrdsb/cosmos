import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-sidebar-outer-left',
  templateUrl: './sidebar-outer-left.component.html',
  styleUrls: ['./sidebar-outer-left.component.scss']
})
export class SidebarOuterLeftComponent implements OnInit {
  public title = 'Panel Title';

  enabled: boolean;
  enabled$ = this.chassisService.sidebarOuterLeftEnabled$;

  visible: boolean;
  visible$ = this.chassisService.sidebarOuterLeftVisible$;

  content: string;
  content$ = this.chassisService.sidebarOuterLeftContent$;

  constructor(
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
    console.log(`sidebar-outer-left enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`sidebar-outer-left visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`sidebar-outer-left content: ${this.content}`);
  }

  toggleSidebarOuterLeft() {
    this.chassisService.toggleSidebarOuterLeft();
    console.log('toggle sidebarOuterLeft');
  }
}
