'use strict';


class Copyright {

  static create() {
    return {
      controller: [Copyright],
      template: require('./copyright.tpl.html')
    };
  }


}


module.exports = Copyright;
