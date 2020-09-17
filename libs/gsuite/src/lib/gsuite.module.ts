import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { GSuiteRoutingModule } from './gsuite-routing.module';
import { GSuiteHomeComponent } from './gsuite-home/gsuite-home.component';

@NgModule({
  declarations: [
    GSuiteHomeComponent
  ],
  imports: [
    CommonModule,
    GSuiteRoutingModule
  ],
  exports: [
    GSuiteHomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class GSuiteModule {}
