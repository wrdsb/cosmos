import { Component, OnInit } from '@angular/core';

import { UILayoutService } from '../ui-layout.service';

@Component({
  selector: 'cosmos-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.layoutService.sidebarLeftEnabled$;

  visible: boolean;
  visible$ = this.layoutService.sidebarLeftVisible$;

  content: string;
  content$ = this.layoutService.sidebarLeftContent$;

  constructor(
    private layoutService: UILayoutService
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
    console.log(`sidebar-left enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`sidebar-left visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`sidebar-left content: ${this.content}`);
  }
}
