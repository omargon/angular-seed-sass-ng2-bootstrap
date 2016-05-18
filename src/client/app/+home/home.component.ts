import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lpmc-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css'],
  directives: [FORM_DIRECTIVES]
})
/**
 * This class represents the lazy loaded HomeComponent.
 */
export class HomeComponent { }
