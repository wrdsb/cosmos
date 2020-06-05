import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

import { Menu } from "@cosmos/ui";
import { UINavigationService } from "@cosmos/ui-navigation";

@Component({
  selector: 'cosmos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Sorting Hat';

  enabled: boolean;
  enabled$ = this.chassisService.headerEnabled$;

  visible: boolean;
  visible$ = this.chassisService.headerVisible$;

  content: string;
  content$ = this.chassisService.headerContent$;

  headerMenu: Menu;

  showSlideinLeft: boolean;
  showSlideinLeft$ = this.chassisService.slideinLeftVisible$;

  showSlideinRight: boolean;
  showSlideinRight$ = this.chassisService.slideinRightVisible$;

  constructor(
    private chassisService: ChassisService,
    private navigationService: UINavigationService
  ) { }

  ngOnInit(): void {
    this.getEnabled();
    this.getVisible();
    this.getContent();
    this.getHeaderMenu();
  }

  getEnabled(): void {
    this.enabled$.subscribe(enabled => 
      this.enabled = enabled
    );
    console.log(`header enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`header visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`header content: ${this.content}`);
  }

  getHeaderMenu(): void {
    this.navigationService.getHeader().subscribe(menu => this.headerMenu = menu);
  }
}
