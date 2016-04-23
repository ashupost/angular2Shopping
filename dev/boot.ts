///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {provide} from "angular2/core";

bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        HTTP_PROVIDERS,
        JSONP_PROVIDERS])
    .catch(err => console.error(err));