System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Hero, DoCheckComponent, DoCheckParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero(name) {
                    this.name = name;
                }
                return Hero;
            }());
            DoCheckComponent = (function () {
                function DoCheckComponent() {
                    this.changeDetected = false;
                    this.changeLog = [];
                    this.oldHeroName = '';
                    this.oldPower = '';
                    this.oldLogLength = 0;
                    this.noChangeCount = 0;
                }
                DoCheckComponent.prototype.ngDoCheck = function () {
                    if (this.hero.name !== this.oldHeroName) {
                        this.changeDetected = true;
                        this.changeLog.push("DoCheck: Hero name changed to \"" + this.hero.name + "\" from \"" + this.oldHeroName + "\"");
                        this.oldHeroName = this.hero.name;
                    }
                    if (this.power !== this.oldPower) {
                        this.changeDetected = true;
                        this.changeLog.push("DoCheck: Power changed to \"" + this.power + "\" from \"" + this.oldPower + "\"");
                        this.oldPower = this.power;
                    }
                    if (this.changeDetected) {
                        this.noChangeCount = 0;
                    }
                    else {
                        // log that hook was called when there was no relevant change.
                        var count = this.noChangeCount += 1;
                        var noChangeMsg = "DoCheck called " + count + "x when no change to hero or power";
                        if (count === 1) {
                            // add new "no change" message
                            this.changeLog.push(noChangeMsg);
                        }
                        else {
                            // update last "no change" message
                            this.changeLog[this.changeLog.length - 1] = noChangeMsg;
                        }
                    }
                    this.changeDetected = false;
                };
                // Copied from OnChangesComponent
                DoCheckComponent.prototype.ngOnChanges = function (changes) {
                    for (var propName in changes) {
                        var prop = changes[propName];
                        var cur = JSON.stringify(prop.currentValue);
                        var prev = JSON.stringify(prop.previousValue);
                        this.changeLog.push("OnChanges: " + propName + ": currentValue = " + cur + ", previousValue = " + prev);
                    }
                };
                DoCheckComponent.prototype.reset = function () {
                    this.changeDetected = true;
                    this.changeLog.length = 0;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Hero)
                ], DoCheckComponent.prototype, "hero", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DoCheckComponent.prototype, "power", void 0);
                DoCheckComponent = __decorate([
                    core_1.Component({
                        selector: 'do-check',
                        template: "\n  <div class=\"hero\">\n    <p>{{hero.name}} can {{power}}</p>\n\n    <h4>-- Change Log --</h4>\n    <div *ngFor=\"#chg of changeLog\">{{chg}}</div>\n  </div>\n  ",
                        styles: [
                            '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
                            'p {background: Yellow; padding: 8px; margin-top: 8px}'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoCheckComponent);
                return DoCheckComponent;
            }());
            exports_1("DoCheckComponent", DoCheckComponent);
            /***************************************/
            DoCheckParentComponent = (function () {
                function DoCheckParentComponent() {
                    this.title = 'DoCheck';
                    this.reset();
                }
                DoCheckParentComponent.prototype.reset = function () {
                    this.hero = new Hero('Windstorm');
                    this.power = 'sing';
                    this.childView && this.childView.reset();
                };
                __decorate([
                    core_1.ViewChild(DoCheckComponent), 
                    __metadata('design:type', DoCheckComponent)
                ], DoCheckParentComponent.prototype, "childView", void 0);
                DoCheckParentComponent = __decorate([
                    core_1.Component({
                        selector: 'do-check-parent',
                        templateUrl: 'templates/lifecycle-hooks/on-changes-parent.component.html',
                        styles: ['.parent {background: Lavender}'],
                        directives: [DoCheckComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoCheckParentComponent);
                return DoCheckParentComponent;
            }());
            exports_1("DoCheckParentComponent", DoCheckParentComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=do-check.component.js.map