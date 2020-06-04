import { Component, OnInit } from '@angular/core';

import { UILayoutService } from '../ui-layout.service';

@Component({
  selector: 'cosmos-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.scss']
})
export class PanelLeftComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.layoutService.panelLeftEnabled$;

  visible: boolean;
  visible$ = this.layoutService.panelLeftVisible$;

  content: string;
  content$ = this.layoutService.panelLeftContent$;

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
    console.log(`panel-left enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`panel-left visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`panel-left content: ${this.content}`);
  }
}
