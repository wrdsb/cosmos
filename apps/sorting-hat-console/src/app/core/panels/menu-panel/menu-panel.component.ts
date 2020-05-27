import { Component, OnInit } from '@angular/core';

import { Menu } from "../../navigation/menu.model";
import { NavigationService } from "../../navigation/navigation.service";
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {
  sideMenu: Menu;

  showNav: boolean;
  showNav$ = this.layoutService.showNav$;

  constructor(
    private navigationService: NavigationService,
    private layoutService: LayoutService
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
    this.layoutService.setShowNav(!this.showNav);
    console.log(`current showNav ${this.showNav}`);
  }
}
