import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.scss']
})
export class PanelRightComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.panelRightEnabled$;

  visible: boolean;
  visible$ = this.chassisService.panelRightVisible$

  content: string;
  content$ = this.chassisService.panelRightContent$;

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
    console.log(`panel-right enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`panel-right visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`panel-right content: ${this.content}`);
  }
}
