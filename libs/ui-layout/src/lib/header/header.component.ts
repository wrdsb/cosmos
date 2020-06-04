import { Component, OnInit } from '@angular/core';

import { UILayoutService } from '../ui-layout.service';

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
  enabled$ = this.layoutService.headerEnabled$;

  visible: boolean;
  visible$ = this.layoutService.headerVisible$;

  content: string;
  content$ = this.layoutService.headerContent$;

  headerMenu: Menu;

  showPanelLeft: boolean;
  showPanelLeft$ = this.layoutService.panelLeftVisible$;

  showPanelRight: boolean;
  showPanelRight$ = this.layoutService.panelRightVisible$;

  constructor(
    private layoutService: UILayoutService,
    private navigationService: UINavigationService
  ) { }

  ngOnInit(): void {
    this.getEnabled();
    this.getVisible();
    this.getContent();
    this.getHeaderMenu();
    this.getShowPanelLeft();
    this.getShowPanelRight();
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

  getShowPanelLeft() {
    this.showPanelLeft$.subscribe(showPanelLeft => 
      this.showPanelLeft = showPanelLeft
    );
    console.log(`getShowPanelLeft: ${this.showPanelLeft}`);
  }

  toggleShowPanelLeft(): void {
    console.log(`set showPanelLeft to: ${!this.showPanelLeft}`);
    this.layoutService.showPanelLeft(!this.showPanelLeft);
    console.log(`current showPanelLeft: ${this.showPanelLeft}`);
  }

  getShowPanelRight() {
    this.showPanelRight$.subscribe(showPanelRight => 
      this.showPanelRight = showPanelRight
    );
    console.log(`getShowPanelRight: ${this.showPanelRight}`);
  }

  toggleShowPanelRight(): void {
    console.log(`set showPanelRight to: ${!this.showPanelRight}`);
    this.layoutService.showPanelRight(!this.showPanelRight);
    console.log(`current showPanelRight: ${this.showPanelRight}`);
  }
}
