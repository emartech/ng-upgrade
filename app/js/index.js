'use strict';

const PhoneRepository = require('./services/phone-repository.service');
const CarrierRepository = require('./services/carrier-repository.service');


angular
  .module('phoneApp', [
    'ngRoute'
  ])
  .service('phoneRepository', PhoneRepository.create())
  .service('carrierRepository', CarrierRepository.create())
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/phone/phone-list.tpl.html',
        controller: 'PhoneListController'
      })
      .when('/phone/:fileId', {
        templateUrl: 'js/phone/phone.tpl.html',
        controller: 'PhoneController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

require('./phone/phone-list.ctrl.js');
require('./phone/phone.ctrl.js');
require('./carrier-select.directive.js');
require('./search-box.directive.js');
require('./copyright.directive.js');
require('./short-description.filter.js');


