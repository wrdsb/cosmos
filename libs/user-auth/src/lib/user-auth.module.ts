import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalRedirectComponent } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication, InteractionType, BrowserCacheLocation, LogLevel } from '@azure/msal-browser';

import { EnvironmentService } from "@cosmos/environment";
import { GraphService } from '@cosmos/angular-services/msgraph-service';

import { AuthButtonComponent } from './auth-button/auth-button.component';
import { LoginPageComponent } from './login-page/login-page.component';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1; // Remove this line to use Angular Universal

function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}

function MSALInstanceFactory(env: EnvironmentService): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: env.aadClientId,
      authority: env.aadAuthority,
      redirectUri: env.aadRedirectUri,
      postLogoutRedirectUri: env.aadPostLogoutRedirectUri,
      navigateToLoginRequestUrl: env.aadNavigateToLoginRequestUrl
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11. Remove this line to use Angular Universal
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false
      }
    }
  });
}

function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://wrdsb-codex.azurewebsites.net/api/ping', [ 'https://wrdsb-codex.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-codex.azurewebsites.net/api/igor-groups-groups-search', [ 'https://wrdsb-codex.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-flenderson.azurewebsites.net/api/ping', [ 'https://wrdsb-hagar.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-hagar.azurewebsites.net/api/ping', [ 'https://wrdsb-hagar.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-hagar.azurewebsites.net/api/aad-group-query', [ 'https://wrdsb-hagar.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-houston.azurewebsites.net/api/ping', [ 'https://wrdsb-hagar.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-igor3.azurewebsites.net/api/ping', [ 'https://wrdsb-igor3.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-igor3.azurewebsites.net/api/group-query', [ 'https://wrdsb-igor3.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-panama.azurewebsites.net/api/ping', [ 'https://wrdsb-quartermaster.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-quartermaster.azurewebsites.net/api/ping', [ 'https://wrdsb-quartermaster.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-skinner2.azurewebsites.net/api/ping', [ 'https://wrdsb-quartermaster.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-sorting-hat.azurewebsites.net/api/ping', [ 'https://wrdsb-quartermaster.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/ping', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/google-calendar-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/google-calendars-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/google-group-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/google-groups-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/ipps-person-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/ipps-people-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/device-loan-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/device-loans-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-asset-find', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);
  protectedResourceMap.set('https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-assets-search', [ 'https://wrdsb-viewfinder.azurewebsites.net/user_impersonation' ]);

  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { 
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read']
    },
    loginFailedRoute: '/login-failed'
  };
}

@NgModule({
  declarations: [
    AuthButtonComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,

    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
      deps: [ EnvironmentService ]
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    }
  ],
  exports: [
    AuthButtonComponent,
    LoginPageComponent
  ]
})
export class UserAuthModule {}
