import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from "@angular/material/button";

import { UserAuthModule, UserAuthService } from "@cosmos/user-auth";
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    UserAuthModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomePageComponent},
      {path: '**', pathMatch: 'full', component: NotFoundPageComponent}
    ])
  ],
  exports: [
    HomePageComponent,
    NotFoundPageComponent
  ]
})
export class PagesModule {}
