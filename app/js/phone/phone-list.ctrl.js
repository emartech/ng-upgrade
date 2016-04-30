'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$http', function($scope, $http) {
    $scope.searchText = '';

    $scope.selectedCarrier = undefined;
    $scope.isCarrierSelectorOpened = false;
    $scope.carriers = [
      'AT&T',
      'Cellular South',
      'Verizon',
      'T-Mobile',
      'Best Buy',
      'Dell'
    ];

    $scope.selectCarrier = function(event, carrier) {
      $scope.selectedCarrier = carrier;
      $scope.isCarrierSelectorOpened = false;
    };


    $http.get('phones/phones.json')
      .then(function (response) {
        $scope.phones = response.data;
      });

  }]);

