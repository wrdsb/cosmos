import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from "../environments/environment";

// Firebase imports
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { AngularFireAuthGuardModule } from "@angular/fire/auth-guard";

import { AuthenticationModule } from "./authentication/authentication.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationModule } from "./core/navigation/navigation.module";
import { ThemeModule } from "./core/theme/theme.module";

import { HomeComponent } from './home/home.component';
import { HappyComponent } from './happy/happy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HappyComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    NavigationModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
