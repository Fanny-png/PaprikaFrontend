import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { first, Subject } from 'rxjs';
import { User } from '../Models/user';

const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:
    '637046254425-5mdq3ud8u6ebi3oogudc99j7kl5v4pro.apps.googleusercontent.com',
  scope: 'openid profile email',
  showDebugInformation: true,
};

export interface UserInfo {
  info: {
    sub: string;
    email: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  userProfileSubject = new Subject<UserInfo>();
  constructor(private readonly oAuthService: OAuthService) {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.logoutUrl = window.location.origin;
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oAuthService.hasValidAccessToken()) {
        this.oAuthService.loadUserProfile().then((userProfile) => {
          this.userProfileSubject.next(userProfile as UserInfo);
        });
      }
    });
  }

  login() {
    this.oAuthService.tryLoginImplicitFlow();
    if (!this.oAuthService.hasValidAccessToken()) {
      this.oAuthService.initCodeFlow();
    }
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  signOut() {
    this.oAuthService.logOut();
  }
}
