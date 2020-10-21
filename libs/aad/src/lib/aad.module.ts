import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { AadRoutingModule } from "./aad-routing.module";
import { AadHomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AadHomeComponent
  ],
  imports: [
    CommonModule,
    AadRoutingModule
  ],
  exports: [
    AadHomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class AadModule {}
