import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AuthModule, LogLevel, OpenIdConfiguration } from 'angular-auth-oidc-client';

const config: OpenIdConfiguration = {
    authority: "http://localhost:8080/auth/realms/keycloak-playground",
    redirectUrl: "http://localhost:4200",
    postLogoutRedirectUri: "http://localhost:4200",
    clientId: "keycloak-playground-frontend",
    responseType: "code",
    scope: "openid profile offline_access",
    useRefreshToken: true,
    silentRenew: true,
    ignoreNonceAfterRefresh: true,
    triggerRefreshWhenIdTokenExpired: false,
    logLevel: LogLevel.Debug
  }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule.forRoot({
        config: config
      })
    )
  ]
};
