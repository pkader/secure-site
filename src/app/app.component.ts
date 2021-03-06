import { Component } from '@angular/core';
import { OktaService } from './authenticate/okta.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private oAuthService: OAuthService, private router: Router, private oktaService: OktaService) {
   oktaService.configure();
  }

}
