import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { ScreensGoogleGoogleRoutingModule } from './google-routing.module';
import { ScreensGoogleGoogleHomeComponent } from './google-home/google-home.component';

@NgModule({
  declarations: [
    ScreensGoogleGoogleHomeComponent
  ],
  imports: [
    CommonModule,
    ScreensGoogleGoogleRoutingModule
  ],
  exports: [
    ScreensGoogleGoogleHomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class ScreensGoogleGoogleModule {}
