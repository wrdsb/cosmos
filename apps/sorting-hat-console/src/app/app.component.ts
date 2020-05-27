import { Component } from '@angular/core';

import { Menu } from "./core/navigation/menu.model";
import { NavigationService } from "./core/navigation/navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {}
}
