'use strict';

angular
  .module('phoneApp')
  .directive('carrierSelect', [
    function() {
      return {
        controller: ['$scope', '$rootScope', function($scope, $rootScope) {
          $scope.carriers = [
            'AT&T',
            'Cellular South',
            'Verizon',
            'T-Mobile',
            'Best Buy',
            'Dell'
          ];
          $scope.isCarrierSelectorOpened = false;

          $scope.selectCarrier = function(carrier) {
            $scope.carrier = carrier;
            $scope.isCarrierSelectorOpened = false;
          };

          $scope.$watch('carrier', function(carrier) {
            $rootScope.$broadcast('carrier-selected', carrier);
          });
        }],
        templateUrl: 'js/phone/carrier-select.tpl.html'
      };
    }
  ]);