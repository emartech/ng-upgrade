'use strict';


class PhoneListApp {

  constructor(filteredPhoneList) {
    this.phones = filteredPhoneList;
  }


  $onInit() {
    this.phones.load();
  }


  static create() {
    return {
      controller: ['filteredPhoneList', PhoneListApp],
      template: require('./phone-list-app.tpl.html')
    };
  }


}


module.exports = PhoneListApp;
