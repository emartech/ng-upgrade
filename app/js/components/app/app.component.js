import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Component } from '@angular/core';

import template from './app.tpl.html';
import { PhoneListAppComponent } from '../phone-list-app/phone-list-app.component';

@Component({
  selector: 'phone-app',
  directives: [ROUTER_DIRECTIVES],
  template: template
})
@RouteConfig([
  { path: '/', component: PhoneListAppComponent, name: 'PhoneListApp' }
])
export class AppComponent {}