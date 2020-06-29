import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,

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
