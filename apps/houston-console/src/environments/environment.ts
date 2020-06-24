import { Environment } from "@cosmos/types";

export const environment: Environment = {
  production: false,
  appName: 'Houston Beta',

  aadClientId: 'd15732c7-13e4-41fc-9d8f-c7776b875e58',
  aadAuthority: "https://login.microsoftonline.com/cd25c694-bfb8-48f4-9d0d-b9af282c4ab4",
  aadValidateAuthority: true,
  aadRedirectUri: "http://localhost:4200/",
  aadPostLogoutRedirectUri: "http://localhost:4200/",
  aadNavigateToLoginRequestUrl: true,
};
