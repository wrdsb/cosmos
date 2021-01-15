import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";

import { EnvironmentService } from "@cosmos/environment";
import { GraphService } from '@cosmos/msgraph-service';

import { SignInOutButtonComponent } from './sign-in-out-button/sign-in-out-button.component';
import { BigSignInOutButtonComponent } from './big-sign-in-out-button/big-sign-in-out-button.component';

import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService,
  MsalAngularConfiguration
} from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Configuration } from 'msal';

export const protectedResourceMap: [string, string[]][] = [
  ['https://wrdsb-codex.azurewebsites.net/api/ping', [ 'https://wrdsb-codex.azurewebsites.net/user_impersonation' ]],
  ['https://wrdsb-codex.azurewebsites.net/api/igor-groups-groups-search', [ 'https://wrdsb-codex.azurewebsites.net/user_impersonation' ]],

  ['https://wrdsb-hagar.azurewebsites.net/api/ping', [ 'https://wrdsb-hagar.azurewebsites.net/user_impersonation' ]],
  ['https://wrdsb-hagar.azurewebsites.net/api/aad-group-query', [ 'https://wrdsb-hagar.azurewebsites.net/user_impersonation' ]],

  ['https://wrdsb-igor3.azurewebsites.net/api/ping', [ 'https://wrdsb-igor3.azurewebsites.net/user_impersonation' ]],
  ['https://wrdsb-igor3.azurewebsites.net/api/group-query', [ 'https://wrdsb-igor3.azurewebsites.net/user_impersonation' ]],

  ['https://wrdsb-viewfinder.azurewebsites.net/api/ping', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]],

  ['https://wrdsb-viewfinder.azurewebsites.net/api/google-calendar-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]],
  ['https://wrdsb-viewfinder.azurewebsites.net/api/google-calendars-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]],

  ['https://wrdsb-viewfinder.azurewebsites.net/api/google-group-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]],
  ['https://wrdsb-viewfinder.azurewebsites.net/api/google-groups-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]],

  ['https://wrdsb-viewfinder.azurewebsites.net/api/device-loan-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]],
  ['https://wrdsb-viewfinder.azurewebsites.net/api/device-loans-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]],

  ['https://graph.microsoft.com/v1.0/me', ['user.read']]
];

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

function MSALConfigFactory(env: EnvironmentService): Configuration {
  return {
    auth: {
      clientId: env.aadClientId,
      authority: env.aadAuthority,
      validateAuthority: env.aadValidateAuthority,
      redirectUri: env.aadRedirectUri,
      postLogoutRedirectUri: env.aadPostLogoutRedirectUri,
      navigateToLoginRequestUrl: env.aadNavigateToLoginRequestUrl
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
  };
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return {
    //popUp: !isIE,
    consentScopes: [
      "user.read",
      "openid",
      "profile"
    ],
    unprotectedResources: ["https://www.microsoft.com/en-us/"],
    protectedResourceMap,
    extraQueryParameters: {}
  };
}

@NgModule({
  declarations: [
    SignInOutButtonComponent,
    BigSignInOutButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MsalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    GraphService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory,
      deps: [ EnvironmentService ]
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService
  ],
  exports: [
    SignInOutButtonComponent,
    BigSignInOutButtonComponent
  ]
})
export class UserAuthModule {}
