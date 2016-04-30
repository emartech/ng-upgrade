'use strict';

const PhoneRepositoryService = require('./services/phone-repository.service');
const CarrierRepositoryService = require('./services/carrier-repository.service');

const ShortDescriptionFilter = require('./filters/short-description/short-description.filter');

const BootstrapSelectComponent = require('./components/bootstrap-select/bootstrap-select.component');
const CarrierSelectComponent = require('./components/carrier-select/carrier-select.component');
const SearchComponent = require('./components/search/search.component');
const PhoneListItemComponent = require('./components/phone-list-item/phone-list-item.component');
const CopyrightComponent = require('./components/copyright/copyright.component');
const PhoneAppComponent = require('./components/phone-app/phone-app.component');


angular
  .module('phoneApp', [
    'ngRoute'
  ])
  .service('phoneRepository', PhoneRepositoryService.create())
  .service('carrierRepository', CarrierRepositoryService.create())
  .component('phoneApp', PhoneAppComponent.create())
  .component('bootstrapSelect', BootstrapSelectComponent.create())
  .component('carrierSelect', CarrierSelectComponent.create())
  .component('search', SearchComponent.create())
  .component('phoneListItem', PhoneListItemComponent.create())
  .component('copyright', CopyrightComponent.create())
  .filter('shortDescription', ShortDescriptionFilter.create())
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/phone/phone-list.tpl.html',
        controller: 'PhoneListController'
      })
      .when('/phone/:phoneId', {
        template: '<phone-app></phone-app>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

require('./phone/phone-list.ctrl.js');


