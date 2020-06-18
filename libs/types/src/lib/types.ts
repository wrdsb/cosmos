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