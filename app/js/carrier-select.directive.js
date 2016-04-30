'use strict';

angular
  .module('phoneApp')
  .directive('carrierSelect', [
    function() {
      return {
        controller: ['$scope', '$rootScope', '$http', 'carrierRepository', function($scope, $rootScope, $http, carrierRepository) {
          $scope.carriers = [];
          $scope.isCarrierSelectorOpened = false;

          carrierRepository
            .getAll()
            .then((carriers) => $scope.carriers = carriers);

          $scope.selectCarrier = function(carrier) {
            $rootScope.$broadcast('carrier-selected', carrier);
            $scope.isCarrierSelectorOpened = false;
          };
        }],
        templateUrl: 'js/carrier-select.tpl.html'
      };
    }
  ]);
