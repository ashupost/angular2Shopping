System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var ChildComponent, AfterContentComponent, AfterContentParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            //////////////////
            ChildComponent = (function () {
                function ChildComponent() {
                    this.hero = 'Magneta';
                }
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'my-child',
                        template: '<input [(ngModel)]="hero">'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
            //////////////////////
            AfterContentComponent = (function () {
                function AfterContentComponent(_logger) {
                    this._logger = _logger;
                    this._prevHero = '';
                    this.comment = '';
                    this._logIt('AfterContent constructor');
                }
                AfterContentComponent.prototype.ngAfterContentInit = function () {
                    // viewChild is set after the view has been initialized
                    this._logIt('AfterContentInit');
                    this._doSomething();
                };
                AfterContentComponent.prototype.ngAfterContentChecked = function () {
                    // viewChild is updated after the view has been checked
                    if (this._prevHero === this.contentChild.hero) {
                        this._logIt('AfterContentChecked (no change)');
                    }
                    else {
                        this._prevHero = this.contentChild.hero;
                        this._logIt('AfterContentChecked');
                        this._doSomething();
                    }
                };
                // This surrogate for real business logic sets the `comment`
                AfterContentComponent.prototype._doSomething = function () {
                    this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
                };
                AfterContentComponent.prototype._logIt = function (method) {
                    var vc = this.contentChild;
                    var message = method + ": " + (vc ? vc.hero : 'no') + " child view";
                    this._logger.log(message);
                };
                __decorate([
                    core_1.ContentChild(ChildComponent), 
                    __metadata('design:type', ChildComponent)
                ], AfterContentComponent.prototype, "contentChild", void 0);
                AfterContentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-content',
                        template: "\n    <div>-- projected content begins --</div>\n      <ng-content></ng-content>\n    <div>-- projected content ends --</div>"
                            + "\n    <p *ngIf=\"comment\" class=\"comment\">\n      {{comment}}\n    </p>\n  "
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterContentComponent);
                return AfterContentComponent;
            }());
            exports_1("AfterContentComponent", AfterContentComponent);
            //////////////
            AfterContentParentComponent = (function () {
                function AfterContentParentComponent(logger) {
                    this.show = true;
                    this.logs = logger.logs;
                }
                AfterContentParentComponent.prototype.reset = function () {
                    var _this = this;
                    this.logs.length = 0;
                    // quickly remove and reload AfterContentComponent which recreates it
                    this.show = false;
                    setTimeout(function () { return _this.show = true; }, 0);
                };
                AfterContentParentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-content-parent',
                        template: "\n  <div class=\"parent\">\n    <h2>AfterContent</h2>\n\n    <div   *ngIf=\"show\">" +
                            "<after-content>\n        <my-child></my-child>\n      </after-content>"
                            + "</div>\n\n    <h4>-- AfterContent Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"#msg of logs\">{{msg}}</div>\n  </div>\n  ",
                        styles: ['.parent {background: burlywood}'],
                        providers: [logger_service_1.LoggerService],
                        directives: [AfterContentComponent, ChildComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterContentParentComponent);
                return AfterContentParentComponent;
            }());
            exports_1("AfterContentParentComponent", AfterContentParentComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=after-content.component.js.map