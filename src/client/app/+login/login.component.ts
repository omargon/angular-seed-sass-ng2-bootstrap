import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'lpmc-login',
  templateUrl: 'app/+login/login.component.html',
  styleUrls: ['app/+login/login.component.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
/**
 * This class represents the lazy loaded AboutComponent.
 */
export class LoginComponent {}
