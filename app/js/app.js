'use strict';

import { PhoneRepositoryService } from './services/phone-repository/phone-repository.service';
import { CarrierRepositoryService } from './services/carrier-repository/carrier-repository.service';

angular
  .module('phoneApp', [
    'ngRoute'
  ])

  .service('phoneRepository', PhoneRepositoryService.create())
  .service('carrierRepository', CarrierRepositoryService.create())

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/phone-list.tpl.html',
        controller: 'PhoneListController'
      })
      .when('/phone/:fileId', {
        templateUrl: 'js/phone.tpl.html',
        controller: 'PhoneController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
