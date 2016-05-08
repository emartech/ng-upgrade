import { Component } from '@angular/core';

import template from './phone-list-app.tpl.html';
import { FilteredPhoneListService } from '../../services/filtered-phone-list/filtered-phone-list.service';
import { PhoneListItemComponent } from '../phone-list-item/phone-list-item.component';

@Component({
  selector: 'phone-list-app',
  template: template,
  directives: [PhoneListItemComponent]
})
export class PhoneListAppComponent {

  constructor(filteredPhoneList: FilteredPhoneListService) {
    this.phones = filteredPhoneList;
  }


  ngOnInit() {
    this.phones.load();
  }

}