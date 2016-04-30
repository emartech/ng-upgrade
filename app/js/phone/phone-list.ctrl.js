'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$http', function($scope, $http) {
    $scope.searchText = '';

    $http.get('phones/phones.json')
      .then(function (response) {
        return response.data;
      })
      .then(function(phoneList) {
        $scope.phones = phoneList;
      });
  }]);