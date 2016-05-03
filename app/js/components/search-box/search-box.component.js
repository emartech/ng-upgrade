'use strict';


export class SearchBoxComponent {

  change($event) {
    this.onChange({ value: $event.target.value });
  }


  static create() {
    return {
      bindings: {
        onChange: '&'
      },
      controller: [SearchBoxComponent],
      template: require('./search-box.tpl.html')
    };
  }

}
