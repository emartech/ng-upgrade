'use strict';

const PhoneRepository = require('./services/phone-repository.service');
const CarrierRepository = require('./services/carrier-repository.service');
const BootstrapSelectComponent = require('./components/bootstrap-select/bootstrap-select.component');
const CarrierSelectComponent = require('./components/carrier-select/carrier-select.component');
const SearchComponent = require('./components/search/search.component');
const PhoneListItemComponent = require('./components/phone-list-item/phone-list-item.component');
const ShortDescriptionFilter = require('./filters/short-description/short-description.filter');


angular
  .module('phoneApp', [
    'ngRoute'
  ])
  .service('phoneRepository', PhoneRepository.create())
  .service('carrierRepository', CarrierRepository.create())
  .component('bootstrapSelect', BootstrapSelectComponent.create())
  .component('carrierSelect', CarrierSelectComponent.create())
  .component('search', SearchComponent.create())
  .component('phoneListItem', PhoneListItemComponent.create())
  .filter('shortDescription', ShortDescriptionFilter.create())
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
require('./copyright.directive.js');


