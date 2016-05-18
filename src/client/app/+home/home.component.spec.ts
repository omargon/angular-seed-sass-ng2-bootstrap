import { } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { } from '@angular/core/testing';
import { } from '@angular/platform-browser/src/dom/dom_adapter';

import { HomeComponent } from './home.component';
import { NameListService } from './../shared/index';

export function main() { return true; }

@Component({
  providers: [NameListService],
  selector: 'test-cmp',
  template: '<lpmc-home></lpmc-home>',
  directives: [HomeComponent]
})
class TestComponent {}
