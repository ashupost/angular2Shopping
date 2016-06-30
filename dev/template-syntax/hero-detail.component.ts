import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Hero} from './hero';

let nextHeroDetailId = 1;

@Component({
    selector: 'hero-detail',
    inputs: ['hero'],
    outputs: ['deleteRequest'],
    styles:['button { margin-left: 8px} div {margin: 8px 0} img {height:24px}'],
    template: `
  <div>
    <img src="{{heroImageUrl}}">
    <span [style.text-decoration]="lineThrough">
      {{prefix}} {{hero?.fullName}}
    </span>
    <button (click)="delete()">Delete</button>
  </div>`
})
export class HeroDetailComponent {

    // This component make a request but it can't actually delete a hero.
    deleteRequest = new EventEmitter<Hero>();

    delete() {
        this.deleteRequest.emit(this.hero);
        this.lineThrough = this.lineThrough ? '' : 'line-through';
    }

    hero: Hero = new Hero('','Zzzzzzzz'); // default sleeping hero
    // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
    // Public Domain terms of use: http://www.wpclipart.com/terms.html
    heroImageUrl = 'dist/img/avatar.png';
    lineThrough = '';
    @Input() prefix = '';
}

@Component({
    selector: 'big-hero-detail',
    template: `
  <div style="border: 1px solid black; padding:3px">
    <img src="{{heroImageUrl}}" style="float:left; margin-right:8px;">
    <div><b>{{hero?.fullName}}</b></div>
    <div>First: {{hero?.firstName}}</div>
    <div>Last: {{hero?.lastName}}</div>
    <div>Birthdate: {{hero?.birthdate | date:'longDate'}}</div>
    <div>Web: <a href="{{hero?.url}}" target="_blank">{{hero?.url}}</a></div>
    <div>Rate/hr: {{hero?.rate | currency:'EUR'}}</div>
    <br clear="all">
    <button (click)="delete()">Delete</button>
  </div>
  `
})
export class BigHeroDetailComponent extends HeroDetailComponent {

    @Input()  hero: Hero;
    @Output() deleteRequest = new EventEmitter<Hero>();

    delete() {
        this.deleteRequest.emit(this.hero);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */