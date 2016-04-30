'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $scope.searchText = '';

    $rootScope.$on('carrier-selected', function($event, carrier) {
      $scope.selectedCarrier = carrier;
    });

    $http.get('phones/phones.json')
      .then(function (response) {
        $scope.phones = response.data;
      });
  }]);

