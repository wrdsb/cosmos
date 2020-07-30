import { Component, OnInit } from '@angular/core';

import { Menu } from "@cosmos/types";

import { ChassisService } from "@cosmos/chassis";
import { UINavigationService } from "@cosmos/ui-navigation";

@Component({
  selector: 'cosmos-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {
  sideMenu: Menu;

  constructor(
    private navigationService: UINavigationService,
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    this.getSideMenu();
  }

  getSideMenu(): void {
    this.navigationService.getSide().subscribe(menu =>
      this.sideMenu = menu
    );
  }
}
