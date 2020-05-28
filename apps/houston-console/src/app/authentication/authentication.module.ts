import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AADSigninDirective } from './aad-signin.directive';
import { SignoutDirective } from './signout.directive';
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AADSigninDirective,
    SignoutDirective,
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  exports: [
    LoginPageComponent,
    LoginComponent
  ]
})
export class AuthenticationModule { }
