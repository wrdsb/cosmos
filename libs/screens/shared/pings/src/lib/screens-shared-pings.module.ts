import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PingsUiRoutingModule } from "./screens-shared-pings-routing.module";

import { UiSharedInteractionPingsModule } from '@cosmos/ui/shared/interaction/pings';

@NgModule({
  imports: [
    CommonModule,

    UiSharedInteractionPingsModule
  ],
})
export class ScreensSharedPingsModule {}
