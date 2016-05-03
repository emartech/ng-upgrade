'use strict';


export class SearchComponent {

  change($event) {
    this.onChange({ value: $event.target.value });
  }


  static create() {
    return {
      bindings: {
        onChange: '&'
      },
      controller: [SearchComponent],
      template: require('./search.tpl.html')
    };
  }
  
}
