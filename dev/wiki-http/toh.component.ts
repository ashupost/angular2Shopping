
import { Component }         from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';

import { HeroListComponent } from './hero-list.component';
import { HeroService }       from './hero.service';

import { provide }           from '@angular/core';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { HeroData }          from './hero-data';
import {InMemoryBackendService} from "angular2-in-memory-web-api/index";

@Component({
    selector: 'my-toh',
    template: `
  <h1>Tour of Heroes</h1>
  <hero-list></hero-list>
  `,
    directives: [HeroListComponent],
    providers:  [
        HTTP_PROVIDERS,
        HeroService

    ]
})
export class TohComponent { }

