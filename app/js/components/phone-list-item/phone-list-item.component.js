'use strict';


class PhoneListItem {

  static create() {
    return {
      bindings: {
        phone: '<'
      },
      controller: [PhoneListItem],
      template: require('./phone-list-item.tpl.html')
    };
  }


}


module.exports = PhoneListItem;
