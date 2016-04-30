'use strict';


class BootstrapSelect {

  constructor() {
    this.selectedOption = '';
    this.isOpened = false;
  }


  displaySelectedOption() {
    return this.selectedOption || this.placeholder;
  }


  toggle() {
    this.isOpened = !this.isOpened;
  }


  select(option) {
    this.isOpened = false;
    this.selectedOption = option;
    this.onSelect({ option });
  }


  static create() {
    return {
      bindings: {
        options: '<',
        onSelect: '&',
        placeholder: '@'
      },
      controller: [BootstrapSelect],
      template: require('./bootstrap-select.tpl.html')
    };
  }


}


module.exports = BootstrapSelect;
