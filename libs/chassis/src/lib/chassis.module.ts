import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserAuthModule } from "@cosmos/user-auth";
import { UserProfilesModule } from "@cosmos/user-profiles";

import { ChassisComponent } from './chassis/chassis.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';

import { SlideinLeftComponent } from './slidein-left/slidein-left.component';
import { SlideinRightComponent } from './slidein-right/slidein-right.component';
import { ToggleSlideinLeftComponent } from './toggle-slidein-left/toggle-slidein-left.component';
import { ToggleSlideinRightComponent } from './toggle-slidein-right/toggle-slidein-right.component';

@NgModule({
  declarations: [
    ChassisComponent,
    HeaderComponent,
    FooterComponent,
    SidebarRightComponent,
    SidebarLeftComponent,
    SlideinLeftComponent,
    SlideinRightComponent,
    ToggleSlideinLeftComponent,
    ToggleSlideinRightComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserAuthModule,
    UserProfilesModule
  ],
  exports: [
    ChassisComponent,
    HeaderComponent,
    FooterComponent,
    SidebarRightComponent,
    SidebarLeftComponent,
    ToggleSlideinLeftComponent,
    ToggleSlideinRightComponent
  ]
})
export class ChassisModule {}
