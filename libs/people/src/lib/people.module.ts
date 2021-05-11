import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { PeopleRoutingModule } from "./people-routing.module";
import { HomeComponent } from './home/home.component';
import { AllPrincipalsComponent } from './all-principals/all-principals.component';
import { ElementaryPrincipalsComponent } from './elementary-principals/elementary-principals.component';
import { SecondaryPrincipalsComponent } from './secondary-principals/secondary-principals.component';
import { AllSchoolAdminComponent } from './all-school-admin/all-school-admin.component';
import { ElementarySchoolAdminComponent } from './elementary-school-admin/elementary-school-admin.component';
import { SecondarySchoolAdminComponent } from './secondary-school-admin/secondary-school-admin.component';
import { AllFirstSecretariesComponent } from './all-first-secretaries/all-first-secretaries.component';

@NgModule({
  declarations: [
    HomeComponent,
    AllPrincipalsComponent,
    ElementaryPrincipalsComponent,
    SecondaryPrincipalsComponent,
    AllSchoolAdminComponent,
    ElementarySchoolAdminComponent,
    SecondarySchoolAdminComponent,
    AllFirstSecretariesComponent
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
