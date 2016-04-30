'use strict';

angular
  .module('phoneApp')
  .controller('PhoneController', ['$http', '$routeParams', '$scope', 'phoneRepository', function($http, $routeParams, $scope, phoneRepository) {
    $scope.phone = {};

    phoneRepository
      .getOne($routeParams.fileId)
      .then((phone) => $scope.phone = phone);
  }]);
