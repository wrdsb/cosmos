import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironmentService } from "@cosmos/environment";
import { GraphService } from '@cosmos/msgraph-service';

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
import { SignInOutButtonComponent } from './sign-in-out-button/sign-in-out-button.component';

export const protectedResourceMap: [string, string[]][] = [
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
    popUp: !isIE,
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
  imports: [
    CommonModule,
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
  declarations: [SignInOutButtonComponent],
})
export class AngularAADAuthModule {}
