'use strict';

angular
  .module('phoneApp')
  .directive('carrierSelect', [
    function() {
      return {
        controller: ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
          $http.get('/api/carriers.json')
            .then(function (response) {
              $scope.carriers = response.data;
            });

          $scope.isCarrierSelectorOpened = false;

          $scope.selectCarrier = function(carrier) {
            $scope.carrier = carrier;
            $scope.isCarrierSelectorOpened = false;
          };

          $scope.$watch('carrier', function(carrier) {
            $rootScope.$broadcast('carrier-selected', carrier);
          });
        }],
        templateUrl: 'js/carrier-select.tpl.html'
      };
    }
  ]);
