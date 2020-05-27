import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.layoutService.sidebarRightEnabled$;

  visible: boolean;
  visible$ = this.layoutService.sidebarRightVisible$;

  content: string;
  content$ = this.layoutService.sidebarRightContent$;

  constructor(
    private layoutService: LayoutService
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
    console.log(`sidebar-right enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`sidebar-right visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`sidebar-right content: ${this.content}`);
  }
}
