import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export const authCodeFlowConfig = {
  issuer: "http://localhost:8080/auth/realms/keycloak-playground",
  tokenEndpoint: "http://localhost:8080/auth/realms/keycloak-playground",
  redirectUri: "http://localhost:4200",
  clientId: "keycloak-playground-frontend",
  responseType: "code",
  scope: "openid profile",
  preserveRequestedRoute: false
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  isLoggedIn$ = new BehaviorSubject(false);

  constructor() {
  }

  login() {
  }

  logout() {
  }
}
