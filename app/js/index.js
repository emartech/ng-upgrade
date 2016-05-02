'use strict';

const PhoneRepositoryService = require('./services/phone-repository/phone-repository.service');
const CarrierRepositoryService = require('./services/carrier-repository/carrier-repository.service');
const FilteredPhoneListService = require('./services/filtered-phone-list/filtered-phone-list.service');

const ShortDescriptionFilter = require('./filters/short-description/short-description.filter');

const PhoneAppComponent = require('./components/phone-app/phone-app.component');
const PhoneListAppComponent = require('./components/phone-list-app/phone-list-app.component');
const BootstrapSelectComponent = require('./components/bootstrap-select/bootstrap-select.component');
const CarrierSelectComponent = require('./components/carrier-select/carrier-select.component');
const SearchComponent = require('./components/search/search.component');
const PhoneListItemComponent = require('./components/phone-list-item/phone-list-item.component');
const CopyrightComponent = require('./components/copyright/copyright.component');

require('angular1-async-filter');

angular
  .module('phoneApp', [
    'ngRoute', 'asyncFilter'
  ])

  .service('phoneRepository', PhoneRepositoryService.create())
  .service('carrierRepository', CarrierRepositoryService.create())
  .service('filteredPhoneList', FilteredPhoneListService.create())

  .component('phoneApp', PhoneAppComponent.create())
  .component('phoneListApp', PhoneListAppComponent.create())
  .component('bootstrapSelect', BootstrapSelectComponent.create())
  .component('carrierSelect', CarrierSelectComponent.create())
  .component('search', SearchComponent.create())
  .component('phoneListItem', PhoneListItemComponent.create())
  .component('copyright', CopyrightComponent.create())

  .filter('shortDescription', ShortDescriptionFilter.create())

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<phone-list-app></phone-list-app>'
      })
      .when('/phone/:phoneId', {
        template: '<phone-app></phone-app>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
