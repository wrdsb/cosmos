import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MsalModule, MsalRedirectComponent } from '@azure/msal-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { environment } from "../environments/environment";
import { EnvironmentService } from "@cosmos/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserAuthModule } from "@cosmos/user-auth";
import { UserProfilesModule } from '@cosmos/user-profiles';

import { ChassisModule } from "@cosmos/chassis";
import { PanelsModule } from "@cosmos/panels";
import { PagesModule } from "@cosmos/pages";

import { NotificationsModule } from '@cosmos/notifications';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    MsalModule,

    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    FontAwesomeModule,

    AppRoutingModule,

    UserAuthModule,
    UserProfilesModule,

    ChassisModule,
    PanelsModule,
    PagesModule,

    NotificationsModule,
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: EnvironmentService,
      useValue: environment
    },
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
