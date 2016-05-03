'use strict';


class Copyright {

  constructor(ACTUAL_YEAR) {
    this.actualYear = ACTUAL_YEAR;
  }

  static create() {
    return {
      controller: ['ACTUAL_YEAR', Copyright],
      template: require('./copyright.tpl.html')
    };
  }


}


module.exports = Copyright;
