'use strict';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import template from './phone-list.tpl.html';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'phone-list',
  template: template
})
export class PhoneList {
  phones = [];

  constructor(http: Http) {
    this._http = http;
  }

  ngOnInit() {
    this._http.get('/api/phones.json').toPromise()
      .then((response) => {
        this.phones = response.json();
      });
  }
}
