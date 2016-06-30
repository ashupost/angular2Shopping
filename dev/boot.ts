///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent, APP_ROUTER_PROVIDERS} from './app.component';
import { LocationStrategy,   HashLocationStrategy } from '@angular/common';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
declare var jQuery: any;
import {provide} from "@angular/core";
import {ROUTER_PROVIDERS} from "@angular/router";

bootstrap(AppComponent,
    [APP_ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        HTTP_PROVIDERS,
        JSONP_PROVIDERS])
    .catch(err => console.error(err));