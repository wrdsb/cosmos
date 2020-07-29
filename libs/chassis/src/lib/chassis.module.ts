import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UserAuthModule } from "@cosmos/user-auth";
import { UserProfilesModule } from "@cosmos/user-profiles";

import { ChassisComponent } from './chassis/chassis.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SidebarOuterLeftComponent } from './sidebar-outer-left/sidebar-outer-left.component';
import { SidebarOuterRightComponent } from './sidebar-outer-right/sidebar-outer-right.component';

import { SidebarInnerLeftComponent } from './sidebar-inner-left/sidebar-inner-left.component';
import { SidebarInnerRightComponent } from './sidebar-inner-right/sidebar-inner-right.component';

@NgModule({
  declarations: [
    ChassisComponent,
    HeaderComponent,
    FooterComponent,
    SidebarOuterLeftComponent,
    SidebarOuterRightComponent,
    SidebarInnerLeftComponent,
    SidebarInnerRightComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,

    UserAuthModule,
    UserProfilesModule
  ],
  exports: [
    ChassisComponent,
    HeaderComponent,
    FooterComponent,
    SidebarOuterLeftComponent,
    SidebarOuterRightComponent,
    SidebarInnerLeftComponent,
    SidebarInnerRightComponent
  ]
})
export class ChassisModule {}
