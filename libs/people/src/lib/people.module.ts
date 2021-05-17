import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';

import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatRadioModule } from "@angular/material/radio";

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

import { PersonMetaDialogComponent } from './person-meta-dialog/person-meta-dialog.component';

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

    PersonMetaDialogComponent
  ],
  imports: [
    CommonModule,

    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,

    FontAwesomeModule,
    
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatRadioModule,

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
    SecondaryFirstSecretariesComponent,

    PersonMetaDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class PeopleModule {}
