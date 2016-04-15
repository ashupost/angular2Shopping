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
    var ChildViewComponent, AfterViewComponent, AfterViewParentComponent;
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
            ChildViewComponent = (function () {
                function ChildViewComponent() {
                    this.hero = 'Magneta';
                }
                ChildViewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-child',
                        template: '<input [(ngModel)]="hero">'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildViewComponent);
                return ChildViewComponent;
            }());
            exports_1("ChildViewComponent", ChildViewComponent);
            //////////////////////
            AfterViewComponent = (function () {
                function AfterViewComponent(_logger) {
                    this._logger = _logger;
                    this._prevHero = '';
                    this.comment = '';
                    this._logIt('AfterView constructor');
                }
                AfterViewComponent.prototype.ngAfterViewInit = function () {
                    // viewChild is set after the view has been initialized
                    this._logIt('AfterViewInit');
                    this._doSomething();
                };
                AfterViewComponent.prototype.ngAfterViewChecked = function () {
                    // viewChild is updated after the view has been checked
                    if (this._prevHero === this.viewChild.hero) {
                        this._logIt('AfterViewChecked (no change)');
                    }
                    else {
                        this._prevHero = this.viewChild.hero;
                        this._logIt('AfterViewChecked');
                        this._doSomething();
                    }
                };
                // This surrogate for real business logic sets the `comment`
                AfterViewComponent.prototype._doSomething = function () {
                    var _this = this;
                    var c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
                    if (c !== this.comment) {
                        // Wait a tick because the component's view has already been checked
                        setTimeout(function () { return _this.comment = c; }, 0);
                    }
                };
                AfterViewComponent.prototype._logIt = function (method) {
                    var vc = this.viewChild;
                    var message = method + ": " + (vc ? vc.hero : 'no') + " child view";
                    this._logger.log(message);
                };
                __decorate([
                    core_1.ViewChild(ChildViewComponent), 
                    __metadata('design:type', ChildViewComponent)
                ], AfterViewComponent.prototype, "viewChild", void 0);
                AfterViewComponent = __decorate([
                    core_1.Component({
                        selector: 'after-view',
                        template: "\n    <div>-- child view begins --</div>\n      <my-child></my-child>\n    <div>-- child view ends --</div>"
                            + "\n    <p *ngIf=\"comment\" class=\"comment\">\n      {{comment}}\n    </p>\n  ",
                        directives: [ChildViewComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterViewComponent);
                return AfterViewComponent;
            }());
            exports_1("AfterViewComponent", AfterViewComponent);
            //////////////
            AfterViewParentComponent = (function () {
                function AfterViewParentComponent(logger) {
                    this.show = true;
                    this.logs = logger.logs;
                }
                AfterViewParentComponent.prototype.reset = function () {
                    var _this = this;
                    this.logs.length = 0;
                    // quickly remove and reload AfterViewComponent which recreates it
                    this.show = false;
                    setTimeout(function () { return _this.show = true; }, 0);
                };
                AfterViewParentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-view-parent',
                        template: "\n  <div class=\"parent\">\n    <h2>AfterView</h2>\n\n    <after-view  *ngIf=\"show\"></after-view>\n\n    <h4>-- AfterView Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"#msg of logs\">{{msg}}</div>\n  </div>\n  ",
                        styles: ['.parent {background: burlywood}'],
                        providers: [logger_service_1.LoggerService],
                        directives: [AfterViewComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterViewParentComponent);
                return AfterViewParentComponent;
            }());
            exports_1("AfterViewParentComponent", AfterViewParentComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=after-view.component.js.map