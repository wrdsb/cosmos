import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.scss']
})
export class PanelRightComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.layoutService.panelRightEnabled$;

  visible: boolean;
  visible$ = this.layoutService.panelRightVisible$

  content: string;
  content$ = this.layoutService.panelRightContent$;

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
