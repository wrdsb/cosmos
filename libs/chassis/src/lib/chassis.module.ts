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
    SidebarRightComponent,
    SidebarLeftComponent,
    ToggleSlideinLeftComponent,
    ToggleSlideinRightComponent
  ]
})
export class ChassisModule {}
