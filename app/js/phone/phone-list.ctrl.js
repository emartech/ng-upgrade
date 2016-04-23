'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['phones', '$scope', function(phones, $scope) {
    $scope.searchText = '';

    phones.getAll().then(function(phoneList) {
      $scope.phones = phoneList;
    });
  }]);