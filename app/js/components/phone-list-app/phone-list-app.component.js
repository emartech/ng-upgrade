'use strict';


class PhoneListApp {

  constructor(filteredPhoneList) {
    this.filteredPhoneList = filteredPhoneList;

    this.phones = [];
    filteredPhoneList.phones$.subscribe((phones) => this.phones = phones);

    this.hasAnyPhones = 0;
    filteredPhoneList.hasAny$.subscribe((hasAny) => this.hasAnyPhones = hasAny);
  }


  $onInit() {
    this.filteredPhoneList.load();
  }


  static create() {
    return {
      controller: ['filteredPhoneList', PhoneListApp],
      template: require('./phone-list-app.tpl.html')
    };
  }


}


module.exports = PhoneListApp;
