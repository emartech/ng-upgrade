'use strict';

angular
  .module('phoneApp')
  .service('phones', [
    '$http',
    function($http) {
      this.get = function(phoneId) {
        return $http.get('phones/' + phoneId + '.json')
          .then(function (response) {
            return response.data;
          });
      };

      this.getAll = function() {
        return $http.get('phones/phones.json')
          .then(function (response) {
            return response.data;
          });
      };
    }
  ]);
