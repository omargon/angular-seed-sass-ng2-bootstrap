import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { HomeComponent } from './+home/index';
import { LoginComponent } from './+login/index';
import { NavbarComponent } from './shared/index';

@Component({
  selector: 'lpmc-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/login',
    component: LoginComponent
  }
])
export class AppComponent {}
