import { } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { } from '@angular/core/testing';
import { } from '@angular/platform-browser/src/dom/dom_adapter';

import { LoginComponent } from './login.component';

export function main() { return true; }

@Component({
  selector: 'test-cmp',
  template: '<lpmc-login></lpmc-login>',
  directives: [LoginComponent]
})
class TestComponent {}
