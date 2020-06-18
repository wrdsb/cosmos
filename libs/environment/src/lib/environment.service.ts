import { Injectable } from '@angular/core';
import { Environment } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  readonly production: boolean;
  readonly appName: string;

  readonly aadClientId: string;
  readonly aadAuthority: string;
  readonly aadValidateAuthority: boolean;
  readonly aadRedirectUri: string;
  readonly aadPostLogoutRedirectUri: string;
  readonly aadNavigateToLoginRequestUrl: boolean;

  constructor(environment: Environment) {
    this.production = environment.production;
    this.appName= environment.appName;

    this.aadClientId = environment.aadClientId;
    this.aadAuthority = environment.aadAuthority;
    this.aadValidateAuthority = environment.aadValidateAuthority;
    this.aadRedirectUri = environment.aadRedirectUri;
    this.aadPostLogoutRedirectUri = environment.aadPostLogoutRedirectUri;
    this.aadNavigateToLoginRequestUrl = environment.aadNavigateToLoginRequestUrl;
  }
}
