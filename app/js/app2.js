'use strict';
import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Component } from '@angular/core';

import { PhoneList } from './components/phone-list.component';

@Component({
  selector: 'phone-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  { path: '/', component: PhoneList, name: 'PhoneList' }
])
class App {}

bootstrap(App, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);