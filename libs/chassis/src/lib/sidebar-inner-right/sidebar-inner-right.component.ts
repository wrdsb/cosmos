import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-sidebar-inner-right',
  templateUrl: './sidebar-inner-right.component.html',
  styleUrls: ['./sidebar-inner-right.component.scss']
})
export class SidebarInnerRightComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.sidebarInnerRightEnabled$;

  content: string;
  content$ = this.chassisService.sidebarInnerRightContent$;

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
    console.log(`sidebar-inner-right enabled: ${this.enabled}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`sidebar-inner-right content: ${this.content}`);
  }
}
