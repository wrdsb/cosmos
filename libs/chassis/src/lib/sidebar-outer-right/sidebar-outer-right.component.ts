import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-sidebar-outer-right',
  templateUrl: './sidebar-outer-right.component.html',
  styleUrls: ['./sidebar-outer-right.component.scss']
})
export class SidebarOuterRightComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.sidebarOuterRightEnabled$;

  visible: boolean;
  visible$ = this.chassisService.sidebarOuterRightVisible$;

  content: string;
  content$ = this.chassisService.sidebarOuterRightContent$;

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
    console.log(`sidebar-outer-right enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`sidebar-outer-right visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`sidebar-outer-right content: ${this.content}`);
  }
}
