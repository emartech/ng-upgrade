'use strict';

angular
  .module('phoneApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/phone/phone-list.tpl.html',
        controller: 'PhoneListController'
      })
      .when('/file/:fileId', {
        templateUrl: 'js/phone/phone.tpl.html',
        controller: 'PhoneController'
      })
      .otherwise({redirectTo: '/'});
  }]);