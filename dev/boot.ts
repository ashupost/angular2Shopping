import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS, JSONP_PROVIDERS, HTTP_BINDINGS} from '@angular/http';
import 'rxjs/Rx';
declare var jQuery: any;
import {provide}  from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        HTTP_PROVIDERS,
        JSONP_PROVIDERS])
    .catch(err => console.error(err));