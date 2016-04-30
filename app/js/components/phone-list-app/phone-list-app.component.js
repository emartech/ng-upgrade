'use strict';


class PhoneListApp {

  constructor($filter, phoneRepository) {
    this._$filter = $filter;
    this._phoneRepository = phoneRepository;

    this.allPhones = [];
    this.phones = [];
    this.searchText = '';
    this.selectedCarrier = '';
  }


  $onInit() {
    this._phoneRepository
      .getAll()
      .then((phones) => this.phones = this.allPhones = phones);
  }


  getFilteredPhones() {
    return this._$filter('filter')(this.allPhones, { name: this.searchText, carrier: this.selectedCarrier });
  }


  selectCarrier(carrier) {
    this.selectedCarrier = carrier;
    this.phones = this.getFilteredPhones();
  }


  search(value) {
    this.searchText = value;
    this.phones = this.getFilteredPhones();
  }


  static create() {
    return {
      controller: ['$filter', 'phoneRepository', PhoneListApp],
      template: require('./phone-list-app.tpl.html')
    };
  }


}


module.exports = PhoneListApp;
