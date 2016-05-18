import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import {
  describe,
  expect,
  inject,
  it,
  async,
  beforeEachProviders
} from '@angular/core/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';

import { AppComponent } from './app.component';

export function main() {

  describe('App component', () => {

    // Support for testing component that uses Router
    beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS]);

    it('should build without a problem',
       async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
         tcb.createAsync(TestComponent)
             .then((fixture) => {
               expect(fixture.nativeElement.innerText.indexOf('HOME')).toBeTruthy();
             });
       })));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<lpmc-app></lpmc-app>',
  directives: [AppComponent]
})
class TestComponent {}
