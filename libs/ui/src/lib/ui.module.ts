import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu, MenuLink } from "./model/menu.model";

@NgModule({
  declarations: [
    Menu,
    MenuLink
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Menu,
    MenuLink
  ]
})
export class UIModule {}
