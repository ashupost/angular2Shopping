import {Component,  AfterViewChecked, AfterViewInit, ViewChild} from 'angular2/core';

import {LoggerService}  from './logger.service';

//////////////////
@Component({
    selector: 'my-child',
    template: '<input [(ngModel)]="hero">'
})
export class ChildViewComponent {
    hero = 'Magneta';
}

//////////////////////
@Component({
    selector: 'after-view',
    template: `
    <div>-- child view begins --</div>
      <my-child></my-child>
    <div>-- child view ends --</div>`
    + `
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `,

    directives: [ChildViewComponent]
})
export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
    private _prevHero = '';

    // Query for a VIEW child of type `ChildViewComponent`
    @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

    constructor(private _logger:LoggerService){
        this._logIt('AfterView constructor');
    }

    ngAfterViewInit() {
        // viewChild is set after the view has been initialized
        this._logIt('AfterViewInit');
        this._doSomething();
    }

    ngAfterViewChecked() {
        // viewChild is updated after the view has been checked
        if (this._prevHero === this.viewChild.hero) {
            this._logIt('AfterViewChecked (no change)');
        } else {
            this._prevHero = this.viewChild.hero;
            this._logIt('AfterViewChecked');
            this._doSomething();
        }
    }

    comment = '';

    // This surrogate for real business logic sets the `comment`
    private _doSomething() {
        let c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
        if (c !== this.comment) {
            // Wait a tick because the component's view has already been checked
            setTimeout(() => this.comment = c, 0);
        }
    }

    private _logIt(method:string){
        let vc = this.viewChild;
        let message = `${method}: ${vc ? vc.hero:'no'} child view`
        this._logger.log(message);
    }
    // ...
}

//////////////
@Component({
    selector: 'after-view-parent',
    template: `
  <div class="parent">
    <h2>AfterView</h2>

    <after-view  *ngIf="show"></after-view>

    <h4>-- AfterView Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
    <div *ngFor="let msg of logs">{{msg}}</div>
  </div>
  `,
    styles: ['.parent {background: burlywood}'],
    providers:[LoggerService],
    directives: [AfterViewComponent]
})
export class AfterViewParentComponent {
    logs:string[];
    show = true;

    constructor(logger:LoggerService){
        this.logs = logger.logs;
    }

    reset() {
        this.logs.length=0;
        // quickly remove and reload AfterViewComponent which recreates it
        this.show = false;
        setTimeout(() => this.show = true, 0)
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */