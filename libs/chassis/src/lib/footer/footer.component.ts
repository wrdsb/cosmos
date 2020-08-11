import { Component, OnInit } from '@angular/core';

import { EnvironmentService } from "@cosmos/environment";
import { ChassisService } from '../chassis.service';

import { Menu } from '@cosmos/types';

@Component({
  selector: 'cosmos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.footerEnabled$;

  visible: boolean;
  visible$ = this.chassisService.footerVisible$;

  content: Menu;
  content$ = this.chassisService.footerContent$;

  footerMenu: Menu;

  constructor(
    private environmentService: EnvironmentService,
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
    console.log(`footer enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`footer visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`footer content: ${this.content}`);
  }
}
