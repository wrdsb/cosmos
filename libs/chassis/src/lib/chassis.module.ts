import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UINavigationModule } from "@cosmos/ui-navigation";
import { PanelsModule } from '@cosmos/panels';

import { ChassisComponent } from './chassis/chassis.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';

import { PanelLeftComponent } from './panel-left/panel-left.component';
import { PanelRightComponent } from './panel-right/panel-right.component';

@NgModule({
  declarations: [
    ChassisComponent,
    HeaderComponent,
    FooterComponent,
    SidebarRightComponent,
    SidebarLeftComponent,
    PanelLeftComponent,
    PanelRightComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UINavigationModule,
    PanelsModule
  ],
  exports: [
    ChassisComponent,
    HeaderComponent,
    FooterComponent,
    SidebarRightComponent,
    SidebarLeftComponent
  ]
})
export class ChassisModule {}
