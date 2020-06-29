import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MsalModule } from '@azure/msal-angular';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from '@cosmos/people-sets';

import { environment } from "../environments/environment";
import { EnvironmentService } from "@cosmos/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserAuthModule } from "@cosmos/user-auth";
import { ChassisModule } from "@cosmos/chassis";
import { PanelsModule } from "@cosmos/panels";
import { PagesModule } from "@cosmos/pages";
import { NotificationsModule } from '@cosmos/notifications'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MsalModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
    //),

    UserAuthModule,
    ChassisModule,
    PanelsModule,
    PagesModule,
    NotificationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: EnvironmentService,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
