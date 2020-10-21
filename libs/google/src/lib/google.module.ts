import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleHomeComponent } from './google-home/google-home.component';

@NgModule({
  declarations: [
    GoogleHomeComponent
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule
  ],
  exports: [
    GoogleHomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class GoogleModule {}
