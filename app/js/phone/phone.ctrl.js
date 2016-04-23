'use strict';

angular
  .module('phoneApp')
  .controller('PhoneController', ['phones', '$routeParams', '$scope', function(phones, $routeParams, $scope) {
    phones.get($routeParams.fileId).then(function(phone) {
      $scope.phone = phone;
    });
  }]);