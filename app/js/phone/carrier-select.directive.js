'use strict';

angular
  .module('phoneApp')
  .directive('carrierSelect', [
    function() {
      return {
        templateUrl: 'js/phone/carrier-select.tpl.html'
      };
    }
  ]);