'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $scope.searchText = '';
    $scope.selectedCarrier = '';
    $scope.phones = [];

    $rootScope.$on('carrier-selected', function($event, carrier) {
      $scope.selectedCarrier = carrier;
    });

    $http.get('/api/phones.json')
      .then(function (response) {
        $scope.phones = response.data;
      });
  }]);

