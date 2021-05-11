import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { PeopleRoutingModule } from "./people-routing.module";
import { HomeComponent } from './home/home.component';
import { AllPrincipalsComponent } from './all-principals/all-principals.component';

@NgModule({
  declarations: [
    HomeComponent,
    AllPrincipalsComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class PeopleModule {}
