import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from "./layout/layout.module";
import { NavigationModule } from "./navigation/navigation.module";
import { ThemeModule } from "./theme/theme.module";
import { PanelsModule } from './panels/panels.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    NavigationModule,
    PanelsModule,
    ThemeModule
  ]
})
export class CoreModule { }
