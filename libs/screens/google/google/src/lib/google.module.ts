import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { GoogleRoutingModule } from './google-routing.module';

import { GoogleHomeComponent } from './google-home/google-home.component';
import { GoogleDashboardComponent } from './google-dashboard/google-dashboard.component';

@NgModule({
  declarations: [
    GoogleHomeComponent,
    GoogleDashboardComponent
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule
  ],
  exports: [
    GoogleHomeComponent,
    GoogleDashboardComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class GoogleModule {}
