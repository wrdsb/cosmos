import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { PeopleRoutingModule } from "./people-routing.module";

import { HomeComponent } from './home/home.component';

import { PeopleBySchoolComponent } from './people-by-school/people-by-school.component';

import { AllPrincipalsComponent } from './all-principals/all-principals.component';
import { ElementaryPrincipalsComponent } from './elementary-principals/elementary-principals.component';
import { SecondaryPrincipalsComponent } from './secondary-principals/secondary-principals.component';

import { AllSchoolAdminComponent } from './all-school-admin/all-school-admin.component';
import { ElementarySchoolAdminComponent } from './elementary-school-admin/elementary-school-admin.component';
import { SecondarySchoolAdminComponent } from './secondary-school-admin/secondary-school-admin.component';

import { AllFirstSecretariesComponent } from './all-first-secretaries/all-first-secretaries.component';
import { ElementaryFirstSecretariesComponent } from './elementary-first-secretaries/elementary-first-secretaries.component';
import { SecondaryFirstSecretariesComponent } from './secondary-first-secretaries/secondary-first-secretaries.component';

@NgModule({
  declarations: [
    HomeComponent,

    PeopleBySchoolComponent,

    AllPrincipalsComponent,
    ElementaryPrincipalsComponent,
    SecondaryPrincipalsComponent,

    AllSchoolAdminComponent,
    ElementarySchoolAdminComponent,
    SecondarySchoolAdminComponent,

    AllFirstSecretariesComponent,
    ElementaryFirstSecretariesComponent,
    SecondaryFirstSecretariesComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [
    HomeComponent,

    PeopleBySchoolComponent,

    AllPrincipalsComponent,
    ElementaryPrincipalsComponent,
    SecondaryPrincipalsComponent,

    AllSchoolAdminComponent,
    ElementarySchoolAdminComponent,
    SecondarySchoolAdminComponent,

    AllFirstSecretariesComponent,
    ElementaryFirstSecretariesComponent,
    SecondaryFirstSecretariesComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class PeopleModule {}
