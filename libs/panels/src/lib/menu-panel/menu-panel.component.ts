import { Component, OnInit } from '@angular/core';

import { Menu } from "@cosmos/ui";
import { UINavigationService } from "@cosmos/ui-navigation";
import { ChassisService } from '@cosmos/chassis';

@Component({
  selector: 'cosmos-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {
  sideMenu: Menu;

  showNav: boolean;
  showNav$ = this.chassisService.sidebarLeftVisible$;

  constructor(
    private navigationService: UINavigationService,
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    this.getSideMenu();
    this.getShowNav();
  }

  getSideMenu(): void {
    this.navigationService.getSide().subscribe(menu =>
      this.sideMenu = menu
    );
  }

  getShowNav(): void {
    this.showNav$.subscribe(showNav => 
      this.showNav = showNav
    );
    console.log(`getShowNav: ${this.showNav}`);
  }

  toggleShowNav(): void {
    console.log(`set showNav to ${!this.showNav}`);
    this.chassisService.showSidebarLeft(!this.showNav);
    console.log(`current showNav ${this.showNav}`);
  }
}
