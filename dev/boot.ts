///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {LocationStrategy,HashLocationStrategy} from 'angular2/platform/common';
import {HTTP_PROVIDERS, JSONP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import 'rxjs/Rx';
declare var jQuery: any;
import {provide} from "angular2/core";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        HTTP_PROVIDERS,
        JSONP_PROVIDERS])
    .catch(err => console.error(err));