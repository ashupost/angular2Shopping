System.register(['angular2/core', './peek-a-boo.component', './logger.service'], function(exports_1, context_1) {
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
    var core_1, peek_a_boo_component_1, logger_service_1;
    var PeekABooParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peek_a_boo_component_1_1) {
                peek_a_boo_component_1 = peek_a_boo_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            PeekABooParentComponent = (function () {
                function PeekABooParentComponent(logger) {
                    this.hasChild = false;
                    this.heroName = 'Windstorm';
                    this._logger = logger;
                    this.hookLog = logger.logs;
                }
                PeekABooParentComponent.prototype.toggleChild = function () {
                    this.hasChild = !this.hasChild;
                    if (this.hasChild) {
                        this.heroName = 'Windstorm';
                        this._logger.clear(); // clear log on create
                    }
                    this._logger.tick();
                };
                PeekABooParentComponent.prototype.updateHero = function () {
                    this.heroName += '!';
                    this._logger.tick();
                };
                PeekABooParentComponent = __decorate([
                    core_1.Component({
                        selector: 'peek-a-boo-parent',
                        template: "\n  <div class=\"parent\">\n    <h2>Peek-A-Boo</h2>\n\n    <button (click)=\"toggleChild()\">\n      {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent\n    </button>\n    <button (click)=\"updateHero()\" [hidden]=\"!hasChild\">Update Hero</button>\n\n    <peek-a-boo *ngIf=\"hasChild\" [name]=\"heroName\">\n    </peek-a-boo>\n\n    <h4>-- Lifecycle Hook Log --</h4>\n    <div *ngFor=\"#msg of hookLog\">{{msg}}</div>\n  </div>\n  ",
                        styles: ['.parent {background: moccasin}'],
                        directives: [peek_a_boo_component_1.PeekABooComponent],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], PeekABooParentComponent);
                return PeekABooParentComponent;
            }());
            exports_1("PeekABooParentComponent", PeekABooParentComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=peek-a-boo-parent.component.js.map