import { Component } from '@angular/core';
import template from './phone-list-app.tpl.html';

import { FilteredPhoneListService } from '../../services/filtered-phone-list/filtered-phone-list.service';

@Component({
  selector: 'phone-list-app',
  template: template
})
export class PhoneListAppComponent {

  constructor(filteredPhoneList: FilteredPhoneListService) {
    this.phones = filteredPhoneList;
  }


  ngOnInit() {
    this.phones.load();
  }

}