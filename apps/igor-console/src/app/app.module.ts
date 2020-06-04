import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiLayoutModule } from "@cosmos/ui-layout";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' },),
    UiLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
