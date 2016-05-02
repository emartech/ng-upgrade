'use strict';


class PhoneListApp {

  constructor(filteredPhoneList) {
    this.filteredPhoneList = filteredPhoneList;
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
