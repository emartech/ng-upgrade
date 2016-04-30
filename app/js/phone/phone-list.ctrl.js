'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$http', '$rootScope', '$filter', 'phoneRepository', function($scope, $http, $rootScope, $filter, phoneRepository) {
    $scope.searchText = '';
    $scope.selectedCarrier = '';
    $scope.allPhones = [];
    $scope.phones = [];

    function getFilteredPhones() {
      return $filter('filter')($scope.allPhones, { name: $scope.searchText, carrier: $scope.selectedCarrier });
    }

    $scope.selectCarrier = function(carrier) {
      $scope.selectedCarrier = carrier;
    };

    $scope.$watch('searchText', function() {
      $scope.phones = getFilteredPhones();
    });
    $scope.$watch('selectedCarrier', function() {
      $scope.phones = getFilteredPhones();
    });

    phoneRepository
      .getAll()
      .then((phones) => $scope.phones = $scope.allPhones = phones);

  }]);

