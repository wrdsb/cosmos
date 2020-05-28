import { Component, OnInit } from '@angular/core';

import { Menu } from "./core/navigation/menu.model";
import { NavigationService } from "./core/navigation/navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Codex';

  footerMenu: Menu;
  headerMenu: Menu;
  sideMenu: Menu;

  showNav = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.getFooterMenu();
    this.getHeaderMenu();
    this.getSideMenu();
  }

  getFooterMenu(): void {
    this.navigationService.getFooter().subscribe(menu => this.footerMenu = menu);
  }

  getHeaderMenu(): void {
    this.navigationService.getHeader().subscribe(menu => this.headerMenu = menu);
  }

  getSideMenu(): void {
    this.navigationService.getSide().subscribe(menu => this.sideMenu = menu);
  }
}
