import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UINavigationModule } from "@cosmos/ui-navigation";
import { UIPanelsModule } from '@cosmos/ui-panels';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';

import { PanelLeftComponent } from './panel-left/panel-left.component';
import { PanelRightComponent } from './panel-right/panel-right.component';

@NgModule({
  declarations: [
    LayoutComponent,
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
    UIPanelsModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarRightComponent,
    SidebarLeftComponent
  ]
})
export class UILayoutModule {}
