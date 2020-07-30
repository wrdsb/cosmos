import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-sidebar-inner-left',
  templateUrl: './sidebar-inner-left.component.html',
  styleUrls: ['./sidebar-inner-left.component.scss']
})
export class SidebarInnerLeftComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.sidebarInnerLeftEnabled$;

  content: string;
  content$ = this.chassisService.sidebarInnerLeftContent$;

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
    console.log(`sidebar-inner-left enabled: ${this.enabled}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`sidebar-inner-left content: ${this.content}`);
  }
}
