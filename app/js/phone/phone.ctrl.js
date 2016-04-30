'use strict';

angular
  .module('phoneApp')
  .controller('PhoneController', ['$http', '$routeParams', '$scope', function($http, $routeParams, $scope) {
    $http.get('/api/' + $routeParams.fileId + '.json')
      .then(function(response) {
        $scope.phone = response.data;
      });
  }]);
