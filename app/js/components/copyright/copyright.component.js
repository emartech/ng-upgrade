import { Component, Inject } from '@angular/core';

import { ACTUAL_YEAR } from '../../actual-year.token';
import template from './copyright.tpl.html';

@Component({
  selector: 'copyright',
  template: template
})
export class CopyrightComponent {
//
  constructor(@Inject(ACTUAL_YEAR) actualYear) {
    this.actualYear = actualYear;
  }

}

//'use strict';
//
//
//export class CopyrightComponent {
//
//  constructor(ACTUAL_YEAR) {
//    this.actualYear = ACTUAL_YEAR;
//  }
//
//  static create() {
//    return {
//      controller: ['ACTUAL_YEAR', CopyrightComponent],
//      template: require('./copyright.tpl.html')
//    };
//  }
//
//}
