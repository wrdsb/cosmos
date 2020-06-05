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

import { SlideinLeftComponent } from './slidein-left/slidein-left.component';
import { SlideinRightComponent } from './slidein-right/slidein-right.component';
import { ToggleSlidinLeftComponent } from './toggle-slidin-left/toggle-slidin-left.component';
import { ToggleSlidinRightComponent } from './toggle-slidin-right/toggle-slidin-right.component';

@NgModule({
  declarations: [
    ChassisComponent,
    HeaderComponent,
    FooterComponent,
    SidebarRightComponent,
    SidebarLeftComponent,
    SlideinLeftComponent,
    SlideinRightComponent,
    ToggleSlidinLeftComponent,
    ToggleSlidinRightComponent
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
    SidebarLeftComponent,
    ToggleSlidinLeftComponent,
    ToggleSlidinRightComponent
  ]
})
export class ChassisModule {}
