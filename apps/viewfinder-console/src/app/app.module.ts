import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MsalModule } from '@azure/msal-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularAADAuthModule } from "@cosmos/angular-aad-auth";
import { ChassisModule } from "@cosmos/chassis";
import { PanelsModule } from "@cosmos/panels";

import { HomeComponent } from './home/home.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MsalModule,
    AngularAADAuthModule,
    ChassisModule,
    PanelsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
