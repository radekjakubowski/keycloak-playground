import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authService = inject(OidcSecurityService);
  http = inject(HttpClient);
  private token!: string;

  isLoggedIn = signal(false);
  
  ngOnInit(): void {
    this.authService.checkAuth().subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, accessToken } = loginResponse
        this.isLoggedIn.set(isAuthenticated);
        this.token = accessToken;
      });
  }

  logout() {
    this.authService.logoff().subscribe();
  }

  login() {
    this.authService.authorize();
  }

  makeAuthorizedServerCall() {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token ?? ''}`)
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')

    this.http.get("http://localhost:5000/weatherforecast", { headers }).subscribe((forecast: any) => console.log(forecast));
  }
}
