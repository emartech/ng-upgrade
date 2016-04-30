'use strict';


class Search {

  change($event) {
    this.onChange({ value: $event.target.value });
  }


  static create() {
    return {
      bindings: {
        onChange: '&'
      },
      controller: [Search],
      template: require('./search.tpl.html')
    };
  }


}


module.exports = Search;
