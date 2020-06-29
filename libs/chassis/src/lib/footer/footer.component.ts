import { Component, OnInit } from '@angular/core';

import { Menu } from '@cosmos/types';
import { UINavigationService } from '@cosmos/ui-navigation';

import { ChassisService } from '../chassis.service';

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

  content: string;
  content$ = this.chassisService.footerContent$;

  footerMenu: Menu;

  constructor(
    private chassisService: ChassisService,
    private navigationService: UINavigationService
  ) { }

  ngOnInit(): void {
    this.getEnabled();
    this.getVisible();
    this.getContent();
    this.getFooterMenu();
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

  getFooterMenu(): void {
    this.navigationService.getFooter().subscribe(menu => this.footerMenu = menu);
  }
}
