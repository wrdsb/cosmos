import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../layout.service';

import { Menu } from "../../navigation/menu.model";
import { NavigationService } from "../../navigation/navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.layoutService.footerEnabled$;

  visible: boolean;
  visible$ = this.layoutService.footerVisible$;

  content: string;
  content$ = this.layoutService.footerContent$;

  footerMenu: Menu;

  constructor(
    private layoutService: LayoutService,
    private navigationService: NavigationService
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
