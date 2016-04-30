'use strict';


class PhoneApp {

  constructor($routeParams, phoneRepository) {
    this.phone = {};

    this._phoneId = $routeParams.phoneId;
    this._phoneRepository = phoneRepository;
  }


  $onInit() {
    this._phoneRepository
      .getOne(this._phoneId)
      .then((phone) => this.phone = phone);
  }


  static create() {
    return {
      controller: ['$routeParams', 'phoneRepository', PhoneApp],
      template: require('./phone-app.tpl.html')
    };
  }


}


module.exports = PhoneApp;
