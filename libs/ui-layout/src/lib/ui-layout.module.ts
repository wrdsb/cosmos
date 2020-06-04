import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  exports: [FooterComponent, HeaderComponent, LayoutComponent]
})
export class UiLayoutModule {}
