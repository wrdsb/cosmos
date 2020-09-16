import { Observable } from "rxjs";

export interface Environment {
  production: boolean;
  appName: string;

  aadClientId: string;
  aadAuthority: string;
  aadValidateAuthority: boolean;
  aadRedirectUri: string;
  aadPostLogoutRedirectUri: string;
  aadNavigateToLoginRequestUrl: boolean;
}

export interface PingRequestState {
  status: Status;
  response?: string;
  error?: string;
}

export interface ListGroupsRequestState {
  status: Status;
  response?: string;
  error?: string;
}

export enum Status {
  UNKNOWN = 'UNKNOWN',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}