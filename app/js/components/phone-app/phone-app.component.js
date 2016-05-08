import { Component } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { PhoneRepositoryService } from '../../services/phone-repository/phone-repository.service';
import template from './phone-app.tpl.html';

@Component({
  selector: 'phone-app',
  template: template
})
export class PhoneAppComponent {

  constructor(routeParams: RouteParams, phoneRepository: PhoneRepositoryService) {
    this.phone = {
      images: [],
      battery: {},
      storage: {},
      hardware: {}
    };

    this._phoneId = routeParams.get('phoneId');
    this._phoneRepository = phoneRepository;
  }

  ngOnInit() {
    this._phoneRepository
      .getOne(this._phoneId)
      .then((phone) => this.phone = phone);
  }
}
