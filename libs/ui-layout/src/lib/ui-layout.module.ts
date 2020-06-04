import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { PanelLeftComponent } from './panel-left/panel-left.component';
import { PanelRightComponent } from './panel-right/panel-right.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, HeaderComponent, LayoutComponent, PanelLeftComponent, PanelRightComponent, SidebarLeftComponent],
  exports: [FooterComponent, HeaderComponent, LayoutComponent, PanelLeftComponent, PanelRightComponent, SidebarLeftComponent]
})
export class UiLayoutModule {}
