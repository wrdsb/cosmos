import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
